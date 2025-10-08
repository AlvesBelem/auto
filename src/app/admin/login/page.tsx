import LoginForm from "./login-form";

const AdminLoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900/5 px-6 py-20">
      <div className="space-y-6 text-center">
        <div className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Painel ServeFlow
          </span>
          <h1 className="text-3xl font-semibold text-slate-900">Entre para personalizar sua experiencia</h1>
          <p className="text-slate-600">
            Use o e-mail cadastrado durante o trial e acesse o dashboard para gerenciar branding, galeria e cardapio.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default AdminLoginPage;
