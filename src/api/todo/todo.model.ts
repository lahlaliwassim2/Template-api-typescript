import * as z from 'zod';

const Todo = z.object({
  content: z.string(),
  done: z.boolean(),
});
type Todo = z.infer<typeof Todo>;

export default Todo;