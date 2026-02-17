import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../lib/auth';
import { apiRequest } from '../lib/api';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

type FormData = z.infer<typeof schema>;

type SignInResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
};

export default function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await apiRequest<SignInResponse>('/auth/sign-in', { method: 'POST', body: data });
      setToken(response.token);
      toast.success(`Welcome ${response.user.email}`);
      navigate('/');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Sign-in failed');
    }
  };

  return (
    <div className="mx-auto mt-24 max-w-md px-4">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <p className="text-sm text-slate-600">Use local seed credentials for development.</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input placeholder="admin@local.test" {...register('email')} />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <Input placeholder="admin123" type="password" {...register('password')} />
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
            </div>
            <Button className="w-full" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
