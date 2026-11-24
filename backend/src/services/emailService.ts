import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const emailFrom = process.env.EMAIL_FROM || 'KROMA <onboarding@resend.dev>';
const emailAdmins = (process.env.EMAIL_ADMIN || 'contact@kroma.agency')
  .split(',')
  .map((email) => email.trim())
  .filter(Boolean);

export type OrderEmailResult =
  | { ok: true; providerIds: string[] }
  | { ok: false; code: string; message: string };

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendOrderNotificationEmail(params: {
  orderId: string;
  type: string;
  customerEmail: string;
  customerName?: string;
  services: any;
  totalPrice?: number;
}) {
  const { orderId, type, customerEmail, customerName, services, totalPrice } = params;
  const servicesText = typeof services === 'string' ? services : JSON.stringify(services, null, 2);

  const subjectClient = `Confirmation de votre commande KROMA - #${orderId.substring(0, 8)}`;
  const htmlClient = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2 style="color: #6366f1;">Merci pour votre commande chez KROMA !</h2>
      <p>Bonjour ${escapeHtml(customerName || customerEmail)},</p>
      <p>Nous avons bien reçu votre demande de projet (${type}). Notre équipe l'étudie actuellement.</p>
      
      <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 20px 0;">
        <h4 style="margin-top: 0;">Détails de la commande :</h4>
        <p><strong>Identifiant :</strong> #${orderId}</p>
        <p><strong>Type :</strong> ${type}</p>
        ${totalPrice ? `<p><strong>Montant :</strong> ${totalPrice} €</p>` : ''}
        <pre style="background: #e5e7eb; padding: 10px; border-radius: 4px;">${escapeHtml(servicesText)}</pre>
      </div>

      <p>Un conseiller vous recontactera très prochainement.</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #666;">L'équipe KROMA Agency</p>
    </div>
  `;

  const subjectAdmin = `[Nouvelle Commande KROMA] #${orderId.substring(0, 8)} (${type})`;
  const htmlAdmin = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2 style="color: #6366f1;">Nouvelle commande reçue !</h2>
      <p><strong>Client :</strong> ${escapeHtml(customerName || 'Non spécifié')} (${escapeHtml(customerEmail)})</p>
      <p><strong>Type :</strong> ${type}</p>
      ${totalPrice ? `<p><strong>Prix :</strong> ${totalPrice} €</p>` : ''}
      <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 20px 0;">
        <h4 style="margin-top: 0;">Services / Détails :</h4>
        <pre style="background: #e5e7eb; padding: 10px; border-radius: 4px;">${escapeHtml(servicesText)}</pre>
      </div>
    </div>
  `;

  if (resend && resendApiKey) {
    try {
      const clientResult = await resend.emails.send({
        from: emailFrom,
        to: customerEmail,
        subject: subjectClient,
        html: htmlClient,
      });

      if (clientResult.error) {
        console.error('[RESEND_ERROR][CLIENT]', JSON.stringify(clientResult.error));
        return { ok: false, code: 'MAIL_CLIENT_FAILED', message: 'Votre commande est enregistrée, mais sa confirmation n’a pas pu être envoyée.' };
      }

      const adminResult = await resend.emails.send({
        from: emailFrom,
        to: emailAdmins,
        subject: subjectAdmin,
        html: htmlAdmin,
      });

      if (adminResult.error) {
        console.error('[RESEND_ERROR][ADMIN]', JSON.stringify(adminResult.error));
        return { ok: false, code: 'MAIL_ADMIN_FAILED', message: 'Votre commande est enregistrée, mais l’équipe n’a pas pu être notifiée par email.' };
      }

      const providerIds = [clientResult.data?.id, adminResult.data?.id].filter((id): id is string => Boolean(id));
      return { ok: true, providerIds };
    } catch (err) {
      console.error('[RESEND_ERROR][UNEXPECTED]', err);
      return { ok: false, code: 'MAIL_SEND_FAILED', message: 'Votre commande est enregistrée, mais l’envoi de l’email a échoué.' };
    }
  } else {
    console.error('[RESEND_ERROR][CONFIG] RESEND_API_KEY is missing');
    return { ok: false, code: 'MAIL_NOT_CONFIGURED', message: 'Votre commande est enregistrée, mais l’envoi de l’email est indisponible.' };
  }
}
