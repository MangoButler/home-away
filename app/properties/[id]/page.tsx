import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";

async function PropertiesDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");
  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };
  console.log(details, params.id);
  return <div>PropertiesDetailPage</div>;
}

export default PropertiesDetailsPage;
