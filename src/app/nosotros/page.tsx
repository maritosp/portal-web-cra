import { redirect } from 'next/navigation';

export default function RedirectNosotros() {
  redirect('/');
  return null;
}
