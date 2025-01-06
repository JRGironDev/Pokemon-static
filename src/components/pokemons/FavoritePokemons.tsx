import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { For, createSignal } from "solid-js";


const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
    );

    return favoritePokemons;
}

export const FavoritePokemons = () => {

    const[pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <For each={pokemons()}>
                {(pokemon) => (
                    <div>
                        <p>{pokemon.name}</p>
                    </div>
                )}
            </For>
        </div>
    );
};