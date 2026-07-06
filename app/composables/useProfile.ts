export const useProfile = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();

  const fetchProfile = async () => {
    const { data } = await client
      .from("profiles")
      .select("*, id_cards(*)")
      .eq("id", user.value!.id)
      .single();
    return data;
  };

  const updateProfile = async (payload: Partial<Profile>) => {
    const { data } = await client
      .from("profiles")
      .update(payload)
      .eq("id", user.value!.id)
      .select()
      .single();
    return data;
  };

  return { fetchProfile, updateProfile };
};
