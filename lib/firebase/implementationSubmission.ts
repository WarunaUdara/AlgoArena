import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from './config';

export interface ImplementationSubmission {
  teamName: string;
  googleDriveLink: string;
  additionalNotes?: string;
  createdAt: Date;
}

/**
 * Validates if a team name exists in the teams collection
 */
export async function validateTeamName(teamName: string): Promise<boolean> {
  try {
    const teamsRef = collection(db, 'teams');
    const q = query(teamsRef, where('teamName', '==', teamName.trim()));
    const querySnapshot = await getDocs(q);
    
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error validating team name:', error);
    throw new Error('Failed to validate team name');
  }
}

/**
 * Checks if a team has already submitted an implementation
 */
export async function checkExistingSubmission(teamName: string): Promise<boolean> {
  try {
    const implementationsRef = collection(db, 'implementations');
    const q = query(implementationsRef, where('teamName', '==', teamName.trim()));
    const querySnapshot = await getDocs(q);
    
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking existing submission:', error);
    throw new Error('Failed to check existing submission');
  }
}

/**
 * Validates Google Drive link format
 */
export function validateGoogleDriveLink(link: string): boolean {
  const drivePatterns = [
    /^https:\/\/drive\.google\.com\/file\/d\/.+/,
    /^https:\/\/drive\.google\.com\/drive\/folders\/.+/,
    /^https:\/\/drive\.google\.com\/open\?id=.+/,
  ];
  
  return drivePatterns.some(pattern => pattern.test(link));
}

/**
 * Submit implementation to Firestore
 */
export async function submitImplementation(
  data: Omit<ImplementationSubmission, 'createdAt'>
): Promise<{ success: boolean; message: string; id?: string }> {
  try {
    // Trim all input data
    const trimmedTeamName = data.teamName.trim();
    const trimmedGoogleDriveLink = data.googleDriveLink.trim();
    const trimmedAdditionalNotes = data.additionalNotes?.trim() || '';

    // Validate team name is not empty after trim
    if (!trimmedTeamName) {
      return {
        success: false,
        message: 'Team name cannot be empty.',
      };
    }

    // Validate Google Drive link is not empty after trim
    if (!trimmedGoogleDriveLink) {
      return {
        success: false,
        message: 'Google Drive link cannot be empty.',
      };
    }

    // Validate team name exists
    const isValidTeam = await validateTeamName(trimmedTeamName);
    if (!isValidTeam) {
      return {
        success: false,
        message: 'Team name not found. Please ensure you are registered for AlgoArena 2025.',
      };
    }

    // Check if team already submitted
    const hasSubmitted = await checkExistingSubmission(trimmedTeamName);
    if (hasSubmitted) {
      return {
        success: false,
        message: 'Your team has already submitted an implementation. Multiple submissions are not allowed.',
      };
    }

    // Validate Google Drive link
    if (!validateGoogleDriveLink(trimmedGoogleDriveLink)) {
      return {
        success: false,
        message: 'Invalid Google Drive link. Please provide a valid Google Drive link.',
      };
    }

    // Add to Firestore
    const implementationsRef = collection(db, 'implementations');
    const docRef = await addDoc(implementationsRef, {
      teamName: trimmedTeamName,
      googleDriveLink: trimmedGoogleDriveLink,
      additionalNotes: trimmedAdditionalNotes,
      createdAt: new Date(),
    });

    return {
      success: true,
      message: 'Implementation submitted successfully!',
      id: docRef.id,
    };
  } catch (error) {
    console.error('Error submitting implementation:', error);
    return {
      success: false,
      message: 'Failed to submit implementation. Please try again.',
    };
  }
}
