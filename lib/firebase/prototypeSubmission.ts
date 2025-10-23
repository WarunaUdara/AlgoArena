// Firebase functions for prototype submission
import { 
  collection, 
  addDoc, 
  serverTimestamp, 
  query, 
  where, 
  getDocs, 
  Timestamp 
} from "firebase/firestore";
import { db } from "./config";

export interface PrototypeSubmissionData {
  teamName: string;
  googleDriveLink: string;
  teamLeaderEmail: string;
  additionalNotes?: string;
  createdAt?: Timestamp;
  status?: string;
}

/**
 * Verify if a team exists and the email matches the team leader
 */
export const verifyTeamAndLeader = async (
  teamName: string,
  teamLeaderEmail: string
): Promise<{ isValid: boolean; message: string; teamId?: string }> => {
  try {
    // Query for the team with matching team name
    const teamQuery = query(
      collection(db, "teams"),
      where("teamName", "==", teamName)
    );
    const teamSnapshot = await getDocs(teamQuery);

    // Check if team exists
    if (teamSnapshot.empty) {
      return {
        isValid: false,
        message: "Team name not found. Please register your team first before submitting a prototype.",
      };
    }

    // Get the team data
    const teamDoc = teamSnapshot.docs[0];
    const teamData = teamDoc.data();

    // Verify if the email matches the team leader's email
    if (teamData.teamLeader.email.toLowerCase() !== teamLeaderEmail.toLowerCase()) {
      return {
        isValid: false,
        message: "Team leader email does not match. Only the registered team leader can submit prototypes.",
      };
    }

    return {
      isValid: true,
      message: "Team verified successfully!",
      teamId: teamDoc.id,
    };
  } catch (error) {
    console.error("Error verifying team:", error);
    return {
      isValid: false,
      message: "Error verifying team. Please try again.",
    };
  }
};

/**
 * Check if a team has already submitted a prototype
 */
export const hasTeamSubmitted = async (teamName: string): Promise<boolean> => {
  try {
    const submissionQuery = query(
      collection(db, "prototypes"),
      where("teamName", "==", teamName)
    );
    const submissionSnapshot = await getDocs(submissionQuery);
    return !submissionSnapshot.empty;
  } catch (error) {
    console.error("Error checking existing submission:", error);
    return false;
  }
};

/**
 * Submit a prototype to Firestore
 */
export const submitPrototype = async (prototypeData: PrototypeSubmissionData) => {
  try {
    // Step 1: Verify team and team leader
    const verification = await verifyTeamAndLeader(
      prototypeData.teamName,
      prototypeData.teamLeaderEmail
    );

    if (!verification.isValid) {
      return {
        success: false,
        message: verification.message,
      };
    }

    // Step 2: Check if team has already submitted
    const alreadySubmitted = await hasTeamSubmitted(prototypeData.teamName);
    if (alreadySubmitted) {
      return {
        success: false,
        message: "Your team has already submitted a prototype. Multiple submissions are not allowed.",
      };
    }

    // Step 3: Add the prototype submission to Firestore
    const docRef = await addDoc(collection(db, "prototypes"), {
      ...prototypeData,
      teamId: verification.teamId,
      createdAt: serverTimestamp(),
      status: "submitted", // Can be: submitted, under-review, accepted, rejected
    });

    return {
      success: true,
      submissionId: docRef.id,
      message: "Prototype submitted successfully! 🎉",
    };
  } catch (error) {
    console.error("Error submitting prototype:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to submit prototype. Please try again.",
    };
  }
};

/**
 * Get all submissions for a specific team
 */
export const getTeamSubmissions = async (teamName: string) => {
  try {
    const q = query(
      collection(db, "prototypes"),
      where("teamName", "==", teamName)
    );
    const querySnapshot = await getDocs(q);
    
    const submissions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      success: true,
      submissions,
    };
  } catch (error) {
    console.error("Error fetching team submissions:", error);
    return {
      success: false,
      submissions: [],
      message: "Failed to fetch submissions.",
    };
  }
};
