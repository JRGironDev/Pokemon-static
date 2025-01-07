import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { type Component, createSignal, Show } from "solid-js";

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (props) => {

    const { pokemon } = props;

    const [isVisible, setIsVisible] = createSignal(true);

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]") as FavoritePokemon[];

        const newFavorites = favorites.filter((p) => p.name !== p.name);

        localStorage.setItem("favorites", JSON.stringify(newFavorites));

        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col mx-auto justify-center p-4 text-slate-100">
                <a href={`/pokemons/${pokemon.name}`} target="_blank" rel="noopener noreferrer">
                    <img src={imageSrc} alt={pokemon.name} class="w-28 h-28" />
                    <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
                </a>

                <button class="text-red-400" onClick={deleteFavorite}>Borrrar</button>
            </div>
        </Show>
    );
};