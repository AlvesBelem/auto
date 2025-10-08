"use client";

import { useState, useTransition } from "react";

import { importMenuFromSpreadsheet } from "@/app/admin/actions/import-menu";
import { Button } from "@/components/ui/button";

const BulkImportSheet = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = () => {
    if (!file) {
      setError("Selecione um arquivo .xlsx ou .csv");
      return;
    }
    setError(null);
    setMessage(null);
    startTransition(async () => {
      const fd = new FormData();
      fd.append("file", file);
      const result = await importMenuFromSpreadsheet(fd);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setMessage(
        `Importação concluída: ${result.categoriesCreated} categorias criadas, ${result.productsCreated} produtos criados, ${result.productsUpdated} atualizados.`,
      );
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-slate-900">Importar via planilha</h3>
        <p className="text-sm text-slate-500">
          Envie um arquivo <strong>.xlsx</strong> (recomendado) ou <strong>.csv</strong> contendo categorias e produtos.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="file"
          accept=".xlsx,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="block w-full rounded-xl border border-slate-200 bg-white p-2 text-sm"
        />
        <Button onClick={onSubmit} disabled={isPending} className="shrink-0 rounded-xl">
          {isPending ? "Processando..." : "Importar"}
        </Button>
      </div>
      {error ? (
        <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      ) : null}
      {message ? (
        <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          {message}
        </p>
      ) : null}

      <div className="mt-4 text-xs text-slate-500">
        <p>Formato esperado (colunas, ordem livre):</p>
        <ul className="list-disc pl-5">
          <li>categoria</li>
          <li>nome (ou name)</li>
          <li>descricao</li>
          <li>preco (ponto ou vírgula)</li>
          <li>imagem (URL)</li>
          <li>video (URL, opcional)</li>
          <li>ingredientes (separados por vírgula)</li>
        </ul>
      </div>
    </div>
  );
};

export default BulkImportSheet;

