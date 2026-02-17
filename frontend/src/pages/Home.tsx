import { useEffect, useState } from 'react';
import { Scissors, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import { apiRequest } from '../lib/api';
import { signOut } from '../lib/auth';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

type MeResponse = {
  user: {
    id: string;
    email: string;
    role: string;
  };
};

export default function Home() {
  const [user, setUser] = useState<MeResponse['user'] | null>(null);

  useEffect(() => {
    apiRequest<MeResponse>('/auth/me')
      .then((response) => setUser(response.user))
      .catch(() => setUser(null));
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scissors className="h-5 w-5" />
            Barbershop SaaS Blueprint
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {user ? (
            <>
              <p>
                Signed in as <strong>{user.email}</strong> ({user.role})
              </p>
              <p className="text-sm text-slate-600">Dashboard placeholder: scheduling, billing, and operations modules plug in here.</p>
              <Button
                variant="secondary"
                onClick={async () => {
                  await signOut();
                  toast.success('Signed out');
                  window.location.href = '/sign-in';
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            </>
          ) : (
            <>
              <p className="text-slate-700">No active session found.</p>
              <Button onClick={() => (window.location.href = '/sign-in')}>Go to sign-in</Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
