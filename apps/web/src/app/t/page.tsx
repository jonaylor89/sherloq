import NewTargetForm from "@/components/forms/new-target-form";

export default function Page() {
  return (
    <div className="mx-auto p-4">
      <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Person Information</h1>
        <NewTargetForm />
      </div>
    </div>
  );
}
