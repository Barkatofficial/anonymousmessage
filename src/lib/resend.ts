import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY || 're_BCLtaYec_LxaWnyrDtRECE5vPunGjfrfV');