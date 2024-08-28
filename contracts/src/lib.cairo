mod constants;
//mod store;

mod types {
}

mod models {
    mod index;
    mod player;
    mod gameroom;
    mod loot;
    mod islandcoords;
}

// mod components {
//     mod playable;
// }

mod systems {
    mod lobby;
    mod gameroom;
}

mod libs {
    mod utils;
    mod seeder;
}

mod utils {
    mod hash;
}

#[cfg(test)]
mod tests {
    // mod setup;
    // mod test_setup;
    // mod test_move;
    // mod test_attack;
    // mod test_heal;
}
