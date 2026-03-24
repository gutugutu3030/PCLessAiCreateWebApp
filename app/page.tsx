import { ExampleFeature } from "@/features/example/components/ExampleFeature";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">
        {process.env.NEXT_PUBLIC_APP_NAME ?? "AI Mobile Template"}
      </h1>
      <ExampleFeature />
    </main>
  );
}
