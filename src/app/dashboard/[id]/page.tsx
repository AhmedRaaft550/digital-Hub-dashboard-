import DashboardId from "./Dashboard-Id";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <DashboardId id={id} />;
};

export default ProjectDetails;
