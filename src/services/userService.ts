import { User } from '../domain/User';

/**
 * Get all the users
 * @returns {Promise<{users: User [], message: string}>}
 */
export const getAllUsers = async (): Promise<{ users: User[]; message: string }> => {
  // Operation here
  await new Promise(resolve => setTimeout(resolve, 3000));

  return {
    users: [
      { firstName: 'Jane', lastName: 'Doe' },
      { firstName: 'John', lastName: 'Doe' }
    ],
    message: 'Users fetched successfully'
  };
};
