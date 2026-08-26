export const WHATSAPP_NUMBERS = [
  "+2348165037338",
  "+2347044774751",
  "+2347036658818",
] as const;

export const PRIMARY_WHATSAPP = WHATSAPP_NUMBERS[0];

export function getWhatsAppLink(
  message = "Hello YMCL, I would like to make an enquiry."
) {
  const number = PRIMARY_WHATSAPP.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppLinkForService(service: string) {
  return getWhatsAppLink(
    `Hello YMCL, I am interested in your ${service} services. Please provide more information.`
  );
}
