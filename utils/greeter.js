export const greeter = ()=> {
  const now = new Date().getHours();
  let msg;

  const greetingsSchemaRaw = 'Good evening!;Good afternoon!;Good morning!;Good night!';
  const greetingsSchema = greetingsSchemaRaw.split(';');

  if (now >= 18) msg = greetingsSchema[0];
  else if (now >= 12) msg = greetingsSchema[1];
  else if (now >= 6) msg = greetingsSchema[2];
  else if (now >= 0) msg = greetingsSchema[3];
  else msg = 'Hello!';

  return msg;
};
