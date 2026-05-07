import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  return Promise.all([photo, user])
    .then(([photoRes, userRes]) => {
      console.log(photoRes.body, userRes.firstName, userRes.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
