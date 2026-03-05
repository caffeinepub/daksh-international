import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Country } from "../backend.d";
import { useActor } from "./useActor";

export function useAddEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      country,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      country: Country;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.addEnquiry(name, email, phone, country, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enquiries"] });
    },
  });
}
