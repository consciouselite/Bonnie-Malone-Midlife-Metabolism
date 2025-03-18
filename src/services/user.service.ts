import { supabase } from '../lib/supabase/client';
import type { UserData } from '../types/quiz';

export const userService = {
  async createUser(userData: UserData) {
    const { data, error } = await supabase
      .from('users')
      .insert({
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        gender: userData.gender,
        age_group: userData.ageGroup
      })
      .select('id')
      .single();

    if (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }

    return data;
  }
};