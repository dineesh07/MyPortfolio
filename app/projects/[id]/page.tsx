export default function ProjectDetail({
  params,
}: { 
  params: { id: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Project Detail for {params.id}</h1>
    </main>
  );
}

