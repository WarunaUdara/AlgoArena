// Firebase functions for team registration
import { collection, addDoc, serverTimestamp, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "./config";

export interface TeamMember {
  name: string;
  email: string;
  whatsappNo: string;
}

export interface TeamRegistrationData {
  teamName: string;
  universityName: string;
  teamLeader: TeamMember;
  teamMembers: TeamMember[];
  createdAt?: Timestamp;
  status?: string;
}

/**
 * Register a new team in Firestore
 */
export const registerTeam = async (teamData: TeamRegistrationData) => {
  try {
    // Check if team name already exists
    const teamNameQuery = query(
      collection(db, "teams"),
      where("teamName", "==", teamData.teamName)
    );
    const existingTeams = await getDocs(teamNameQuery);

    if (!existingTeams.empty) {
      throw new Error("Team name already exists. Please choose a different name.");
    }

    // Check if team leader email already exists
    const emailQuery = query(
      collection(db, "teams"),
      where("teamLeader.email", "==", teamData.teamLeader.email)
    );
    const existingEmails = await getDocs(emailQuery);

    if (!existingEmails.empty) {
      throw new Error("This email is already registered. Each person can only be a team leader once.");
    }

    // Add the team to Firestore
    const docRef = await addDoc(collection(db, "teams"), {
      ...teamData,
      createdAt: serverTimestamp(),
      status: "pending", // Can be: pending, approved, rejected
    });

    return {
      success: true,
      teamId: docRef.id,
      message: "Team registered successfully!",
    };
  } catch (error) {
    console.error("Error registering team:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to register team. Please try again.",
    };
  }
};

/**
 * Check if a team name is available
 */
export const isTeamNameAvailable = async (teamName: string): Promise<boolean> => {
  try {
    const q = query(collection(db, "teams"), where("teamName", "==", teamName));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  } catch (error) {
    console.error("Error checking team name:", error);
    return false;
  }
};

/**
 * Check if an email is already registered as a team leader
 */
export const isEmailAvailable = async (email: string): Promise<boolean> => {
  try {
    const q = query(collection(db, "teams"), where("teamLeader.email", "==", email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
};
