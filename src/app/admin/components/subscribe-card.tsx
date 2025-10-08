"use client";

import { useTransition } from "react";

import { createSubscriptionCheckout } from "@/app/admin/actions/billing";
import { Button } from "@/components/ui/button";

const SubscribeCard = () => {
  const [isPending, startTransition] = useTransition();

  const handleSubscribe = () => {
    startTransition(async () => {
      const result = await createSubscriptionCheckout();
      if (!result.ok) return;
      window.location.href = result.url;
    });
  };

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <p className="text-sm text-slate-600">
        Assine agora e continue com todos os recursos ativos. Você poderá cancelar a qualquer momento.
      </p>
      <Button className="mt-4 w-full" disabled={isPending} onClick={handleSubscribe}>
        {isPending ? "Abrindo checkout..." : "Assinar agora"}
      </Button>
    </div>
  );
};

export default SubscribeCard;

