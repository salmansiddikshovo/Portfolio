import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { ContactFormData, ContactApiResponse } from "@/types";

export function useContact() {
  return useMutation<ContactApiResponse, Error, ContactFormData>({
    mutationFn: async (formData: ContactFormData) => {
      const response = await api.post<ContactApiResponse>("/contact", formData);
      return response.data;
    }
  });
}
