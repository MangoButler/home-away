import { fetchProperties } from "@/utils/actions";
import PropertiesList from "./PropertiesList";
import EmptyList from "./EmptyList";
import type { PropertyCardProps } from "@/utils/types";

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });
  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results"
        message="Try changing some of your filters or search terms."
        btnText="clear filters"
      />
    );
  }
  return <PropertiesList properties = {properties} />;
}

export default PropertiesContainer;