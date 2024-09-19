import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavorites } from "@/utils/actions";

async function FavoritesPage() {
  const favorites = await fetchFavorites();
  if (favorites.length === 0) {
    return (
      <EmptyList
        heading="No favorites so far"
        message="Try adding some from the homepage"
      />
    );
  }

  return <PropertiesList properties={favorites} />;
}

export default FavoritesPage;
