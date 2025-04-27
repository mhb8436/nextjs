import EditTaskClient from "./EditTaskClient";

interface EditTaskPageProps {
  params: {
    id: string;
  };
}

export default function EditTaskPage({ params }: EditTaskPageProps) {
  return <EditTaskClient id={params.id} />;
}
