impl GameRoomIntrospect<> of dojo::model::introspect::Introspect<GameRoom<>> {
    #[inline(always)]
    fn size() -> Option<usize> {
        Option::Some(10)
    }

    fn layout() -> dojo::model::Layout {
        dojo::model::Layout::Struct(
            array![
                dojo::model::FieldLayout {
                    selector: 239309295088010303179674854767833684804913721549493521598274052206420914739,
                    layout: dojo::model::introspect::Introspect::<ContractAddress>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 404502075166424196538136646530976054889702242338407082171602314481216980001,
                    layout: dojo::model::introspect::Introspect::<ContractAddress>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 355140670521530125051625791225371335755660059457194599119034296140464273412,
                    layout: dojo::model::introspect::Introspect::<ContractAddress>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 854456557106728374519428279941863874167274000421952627226145415297787970838,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 983165857257777959593208687568801206294000391940612081066489189070937728497,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 132489883153011259390383606403390756888447421206881808685522003212562407614,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1748227330065814545670367226187486423266152570031718111236803079772826266540,
                    layout: dojo::model::introspect::Introspect::<ContractAddress>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 543042921934837164989719538113410751212031491682363656011064715817027154264,
                    layout: dojo::model::introspect::Introspect::<u64>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 187604516720743015477512244574358438533085312859483989424646246587737716248,
                    layout: dojo::model::introspect::Introspect::<u64>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 332927965519961732954481138570918528932634341308288301975296270296520043642,
                    layout: dojo::model::introspect::Introspect::<u64>::layout()
                }
            ]
                .span()
        )
    }

    #[inline(always)]
    fn ty() -> dojo::model::introspect::Ty {
        dojo::model::introspect::Ty::Struct(
            dojo::model::introspect::Struct {
                name: 'GameRoom',
                attrs: array![].span(),
                children: array![
                    dojo::model::introspect::Member {
                        name: 'game_id',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<u128>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'player1',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<ContractAddress>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'player2',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<ContractAddress>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'invited_player',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<ContractAddress>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'state',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'round_num',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'phase',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'winner',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<ContractAddress>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'timestamp_start',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u64>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'expiry_time',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u64>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'timestamp_end',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u64>::ty()
                    }
                ]
                    .span()
            }
        )
    }
}

#[derive(Drop, Serde)]
pub struct GameRoomEntity {
    __id: felt252, // private field
    pub player1: ContractAddress,
    pub player2: ContractAddress,
    pub invited_player: ContractAddress,
    pub state: u8,
    pub round_num: u8,
    pub phase: u8,
    pub winner: ContractAddress,
    pub timestamp_start: u64,
    pub expiry_time: u64,
    pub timestamp_end: u64,
}

#[generate_trait]
pub impl GameRoomEntityStoreImpl of GameRoomEntityStore {
    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> GameRoomEntity {
        GameRoomModelEntityImpl::get(world, entity_id)
    }


    fn get_player1(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> ContractAddress {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            239309295088010303179674854767833684804913721549493521598274052206420914739
        );
        let field_value = core::serde::Serde::<ContractAddress>::deserialize(ref values);

        if core::option::OptionTrait::<ContractAddress>::is_none(@field_value) {
            panic!("Field `GameRoom::player1`: deserialization failed.");
        }

        core::option::OptionTrait::<ContractAddress>::unwrap(field_value)
    }

    fn set_player1(
        self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: ContractAddress
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                239309295088010303179674854767833684804913721549493521598274052206420914739,
                serialized.span()
            );
    }

    fn get_player2(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> ContractAddress {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            404502075166424196538136646530976054889702242338407082171602314481216980001
        );
        let field_value = core::serde::Serde::<ContractAddress>::deserialize(ref values);

        if core::option::OptionTrait::<ContractAddress>::is_none(@field_value) {
            panic!("Field `GameRoom::player2`: deserialization failed.");
        }

        core::option::OptionTrait::<ContractAddress>::unwrap(field_value)
    }

    fn set_player2(
        self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: ContractAddress
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                404502075166424196538136646530976054889702242338407082171602314481216980001,
                serialized.span()
            );
    }

    fn get_invited_player(
        world: dojo::world::IWorldDispatcher, entity_id: felt252
    ) -> ContractAddress {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            355140670521530125051625791225371335755660059457194599119034296140464273412
        );
        let field_value = core::serde::Serde::<ContractAddress>::deserialize(ref values);

        if core::option::OptionTrait::<ContractAddress>::is_none(@field_value) {
            panic!("Field `GameRoom::invited_player`: deserialization failed.");
        }

        core::option::OptionTrait::<ContractAddress>::unwrap(field_value)
    }

    fn set_invited_player(
        self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: ContractAddress
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                355140670521530125051625791225371335755660059457194599119034296140464273412,
                serialized.span()
            );
    }

    fn get_state(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            854456557106728374519428279941863874167274000421952627226145415297787970838
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `GameRoom::state`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_state(self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                854456557106728374519428279941863874167274000421952627226145415297787970838,
                serialized.span()
            );
    }

    fn get_round_num(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            983165857257777959593208687568801206294000391940612081066489189070937728497
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `GameRoom::round_num`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_round_num(self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                983165857257777959593208687568801206294000391940612081066489189070937728497,
                serialized.span()
            );
    }

    fn get_phase(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            132489883153011259390383606403390756888447421206881808685522003212562407614
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `GameRoom::phase`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_phase(self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                132489883153011259390383606403390756888447421206881808685522003212562407614,
                serialized.span()
            );
    }

    fn get_winner(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> ContractAddress {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            1748227330065814545670367226187486423266152570031718111236803079772826266540
        );
        let field_value = core::serde::Serde::<ContractAddress>::deserialize(ref values);

        if core::option::OptionTrait::<ContractAddress>::is_none(@field_value) {
            panic!("Field `GameRoom::winner`: deserialization failed.");
        }

        core::option::OptionTrait::<ContractAddress>::unwrap(field_value)
    }

    fn set_winner(
        self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: ContractAddress
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1748227330065814545670367226187486423266152570031718111236803079772826266540,
                serialized.span()
            );
    }

    fn get_timestamp_start(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u64 {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            543042921934837164989719538113410751212031491682363656011064715817027154264
        );
        let field_value = core::serde::Serde::<u64>::deserialize(ref values);

        if core::option::OptionTrait::<u64>::is_none(@field_value) {
            panic!("Field `GameRoom::timestamp_start`: deserialization failed.");
        }

        core::option::OptionTrait::<u64>::unwrap(field_value)
    }

    fn set_timestamp_start(
        self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: u64
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                543042921934837164989719538113410751212031491682363656011064715817027154264,
                serialized.span()
            );
    }

    fn get_expiry_time(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u64 {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            187604516720743015477512244574358438533085312859483989424646246587737716248
        );
        let field_value = core::serde::Serde::<u64>::deserialize(ref values);

        if core::option::OptionTrait::<u64>::is_none(@field_value) {
            panic!("Field `GameRoom::expiry_time`: deserialization failed.");
        }

        core::option::OptionTrait::<u64>::unwrap(field_value)
    }

    fn set_expiry_time(self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: u64) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                187604516720743015477512244574358438533085312859483989424646246587737716248,
                serialized.span()
            );
    }

    fn get_timestamp_end(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u64 {
        let mut values = dojo::model::ModelEntity::<
            GameRoomEntity
        >::get_member(
            world,
            entity_id,
            332927965519961732954481138570918528932634341308288301975296270296520043642
        );
        let field_value = core::serde::Serde::<u64>::deserialize(ref values);

        if core::option::OptionTrait::<u64>::is_none(@field_value) {
            panic!("Field `GameRoom::timestamp_end`: deserialization failed.");
        }

        core::option::OptionTrait::<u64>::unwrap(field_value)
    }

    fn set_timestamp_end(self: @GameRoomEntity, world: dojo::world::IWorldDispatcher, value: u64) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                332927965519961732954481138570918528932634341308288301975296270296520043642,
                serialized.span()
            );
    }
}

#[generate_trait]
pub impl GameRoomStoreImpl of GameRoomStore {
    fn entity_id_from_keys(game_id: u128) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        core::poseidon::poseidon_hash_span(serialized.span())
    }

    fn from_values(ref keys: Span<felt252>, ref values: Span<felt252>) -> GameRoom {
        let mut serialized = core::array::ArrayTrait::new();
        serialized.append_span(keys);
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity = core::serde::Serde::<GameRoom>::deserialize(ref serialized);

        if core::option::OptionTrait::<GameRoom>::is_none(@entity) {
            panic!(
                "Model `GameRoom`: deserialization failed. Ensure the length of the keys tuple is matching the number of #[key] fields in the model struct."
            );
        }

        core::option::OptionTrait::<GameRoom>::unwrap(entity)
    }

    fn get(world: dojo::world::IWorldDispatcher, game_id: u128) -> GameRoom {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        dojo::model::Model::<GameRoom>::get(world, serialized.span())
    }


    fn get_player1(world: dojo::world::IWorldDispatcher, game_id: u128) -> ContractAddress {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            239309295088010303179674854767833684804913721549493521598274052206420914739
        );

        let field_value = core::serde::Serde::<ContractAddress>::deserialize(ref values);

        if core::option::OptionTrait::<ContractAddress>::is_none(@field_value) {
            panic!("Field `GameRoom::player1`: deserialization failed.");
        }

        core::option::OptionTrait::<ContractAddress>::unwrap(field_value)
    }

    fn set_player1(self: @GameRoom, world: dojo::world::IWorldDispatcher, value: ContractAddress) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                239309295088010303179674854767833684804913721549493521598274052206420914739,
                serialized.span()
            );
    }

    fn get_player2(world: dojo::world::IWorldDispatcher, game_id: u128) -> ContractAddress {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            404502075166424196538136646530976054889702242338407082171602314481216980001
        );

        let field_value = core::serde::Serde::<ContractAddress>::deserialize(ref values);

        if core::option::OptionTrait::<ContractAddress>::is_none(@field_value) {
            panic!("Field `GameRoom::player2`: deserialization failed.");
        }

        core::option::OptionTrait::<ContractAddress>::unwrap(field_value)
    }

    fn set_player2(self: @GameRoom, world: dojo::world::IWorldDispatcher, value: ContractAddress) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                404502075166424196538136646530976054889702242338407082171602314481216980001,
                serialized.span()
            );
    }

    fn get_invited_player(world: dojo::world::IWorldDispatcher, game_id: u128) -> ContractAddress {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            355140670521530125051625791225371335755660059457194599119034296140464273412
        );

        let field_value = core::serde::Serde::<ContractAddress>::deserialize(ref values);

        if core::option::OptionTrait::<ContractAddress>::is_none(@field_value) {
            panic!("Field `GameRoom::invited_player`: deserialization failed.");
        }

        core::option::OptionTrait::<ContractAddress>::unwrap(field_value)
    }

    fn set_invited_player(
        self: @GameRoom, world: dojo::world::IWorldDispatcher, value: ContractAddress
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                355140670521530125051625791225371335755660059457194599119034296140464273412,
                serialized.span()
            );
    }

    fn get_state(world: dojo::world::IWorldDispatcher, game_id: u128) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            854456557106728374519428279941863874167274000421952627226145415297787970838
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `GameRoom::state`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_state(self: @GameRoom, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                854456557106728374519428279941863874167274000421952627226145415297787970838,
                serialized.span()
            );
    }

    fn get_round_num(world: dojo::world::IWorldDispatcher, game_id: u128) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            983165857257777959593208687568801206294000391940612081066489189070937728497
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `GameRoom::round_num`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_round_num(self: @GameRoom, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                983165857257777959593208687568801206294000391940612081066489189070937728497,
                serialized.span()
            );
    }

    fn get_phase(world: dojo::world::IWorldDispatcher, game_id: u128) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            132489883153011259390383606403390756888447421206881808685522003212562407614
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `GameRoom::phase`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_phase(self: @GameRoom, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                132489883153011259390383606403390756888447421206881808685522003212562407614,
                serialized.span()
            );
    }

    fn get_winner(world: dojo::world::IWorldDispatcher, game_id: u128) -> ContractAddress {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            1748227330065814545670367226187486423266152570031718111236803079772826266540
        );

        let field_value = core::serde::Serde::<ContractAddress>::deserialize(ref values);

        if core::option::OptionTrait::<ContractAddress>::is_none(@field_value) {
            panic!("Field `GameRoom::winner`: deserialization failed.");
        }

        core::option::OptionTrait::<ContractAddress>::unwrap(field_value)
    }

    fn set_winner(self: @GameRoom, world: dojo::world::IWorldDispatcher, value: ContractAddress) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1748227330065814545670367226187486423266152570031718111236803079772826266540,
                serialized.span()
            );
    }

    fn get_timestamp_start(world: dojo::world::IWorldDispatcher, game_id: u128) -> u64 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            543042921934837164989719538113410751212031491682363656011064715817027154264
        );

        let field_value = core::serde::Serde::<u64>::deserialize(ref values);

        if core::option::OptionTrait::<u64>::is_none(@field_value) {
            panic!("Field `GameRoom::timestamp_start`: deserialization failed.");
        }

        core::option::OptionTrait::<u64>::unwrap(field_value)
    }

    fn set_timestamp_start(self: @GameRoom, world: dojo::world::IWorldDispatcher, value: u64) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                543042921934837164989719538113410751212031491682363656011064715817027154264,
                serialized.span()
            );
    }

    fn get_expiry_time(world: dojo::world::IWorldDispatcher, game_id: u128) -> u64 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            187604516720743015477512244574358438533085312859483989424646246587737716248
        );

        let field_value = core::serde::Serde::<u64>::deserialize(ref values);

        if core::option::OptionTrait::<u64>::is_none(@field_value) {
            panic!("Field `GameRoom::expiry_time`: deserialization failed.");
        }

        core::option::OptionTrait::<u64>::unwrap(field_value)
    }

    fn set_expiry_time(self: @GameRoom, world: dojo::world::IWorldDispatcher, value: u64) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                187604516720743015477512244574358438533085312859483989424646246587737716248,
                serialized.span()
            );
    }

    fn get_timestamp_end(world: dojo::world::IWorldDispatcher, game_id: u128) -> u64 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            GameRoom
        >::get_member(
            world,
            serialized.span(),
            332927965519961732954481138570918528932634341308288301975296270296520043642
        );

        let field_value = core::serde::Serde::<u64>::deserialize(ref values);

        if core::option::OptionTrait::<u64>::is_none(@field_value) {
            panic!("Field `GameRoom::timestamp_end`: deserialization failed.");
        }

        core::option::OptionTrait::<u64>::unwrap(field_value)
    }

    fn set_timestamp_end(self: @GameRoom, world: dojo::world::IWorldDispatcher, value: u64) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                332927965519961732954481138570918528932634341308288301975296270296520043642,
                serialized.span()
            );
    }
}

pub impl GameRoomModelEntityImpl of dojo::model::ModelEntity<GameRoomEntity> {
    fn id(self: @GameRoomEntity) -> felt252 {
        *self.__id
    }

    fn values(self: @GameRoomEntity) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.player1, ref serialized);
        core::serde::Serde::serialize(self.player2, ref serialized);
        core::serde::Serde::serialize(self.invited_player, ref serialized);
        core::serde::Serde::serialize(self.state, ref serialized);
        core::serde::Serde::serialize(self.round_num, ref serialized);
        core::serde::Serde::serialize(self.phase, ref serialized);
        core::serde::Serde::serialize(self.winner, ref serialized);
        core::serde::Serde::serialize(self.timestamp_start, ref serialized);
        core::serde::Serde::serialize(self.expiry_time, ref serialized);
        core::serde::Serde::serialize(self.timestamp_end, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    fn from_values(entity_id: felt252, ref values: Span<felt252>) -> GameRoomEntity {
        let mut serialized = array![entity_id];
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity_values = core::serde::Serde::<GameRoomEntity>::deserialize(ref serialized);
        if core::option::OptionTrait::<GameRoomEntity>::is_none(@entity_values) {
            panic!("ModelEntity `GameRoomEntity`: deserialization failed.");
        }
        core::option::OptionTrait::<GameRoomEntity>::unwrap(entity_values)
    }

    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> GameRoomEntity {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world,
            dojo::model::Model::<GameRoom>::selector(),
            dojo::model::ModelIndex::Id(entity_id),
            dojo::model::Model::<GameRoom>::layout()
        );
        Self::from_values(entity_id, ref values)
    }

    fn update(self: @GameRoomEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            dojo::model::Model::<GameRoom>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            self.values(),
            dojo::model::Model::<GameRoom>::layout()
        );
    }

    fn delete(self: @GameRoomEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world,
            dojo::model::Model::<GameRoom>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            dojo::model::Model::<GameRoom>::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, entity_id: felt252, member_id: felt252,
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<GameRoom>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    dojo::model::Model::<GameRoom>::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @GameRoomEntity,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>,
    ) {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<GameRoom>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    dojo::model::Model::<GameRoom>::selector(),
                    dojo::model::ModelIndex::MemberId((self.id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }
}

pub impl GameRoomModelImpl of dojo::model::Model<GameRoom> {
    fn get(world: dojo::world::IWorldDispatcher, keys: Span<felt252>) -> GameRoom {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(keys), Self::layout()
        );
        let mut _keys = keys;

        GameRoomStore::from_values(ref _keys, ref values)
    }

    fn set(self: @GameRoom, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            Self::selector(),
            dojo::model::ModelIndex::Keys(Self::keys(self)),
            Self::values(self),
            Self::layout()
        );
    }

    fn delete(self: @GameRoom, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(Self::keys(self)), Self::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, keys: Span<felt252>, member_id: felt252
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(Self::layout(), member_id) {
            Option::Some(field_layout) => {
                let entity_id = dojo::utils::entity_id_from_keys(keys);
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    Self::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @GameRoom,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>
    ) {
        match dojo::utils::find_model_field_layout(Self::layout(), member_id) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    Self::selector(),
                    dojo::model::ModelIndex::MemberId((self.entity_id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    #[inline(always)]
    fn name() -> ByteArray {
        "GameRoom"
    }

    #[inline(always)]
    fn namespace() -> ByteArray {
        "dojo_starter_rpg"
    }

    #[inline(always)]
    fn tag() -> ByteArray {
        "dojo_starter_rpg-GameRoom"
    }

    #[inline(always)]
    fn version() -> u8 {
        1
    }

    #[inline(always)]
    fn selector() -> felt252 {
        242408052190729320382235369155145077370141807397642240075431664551726219446
    }

    #[inline(always)]
    fn instance_selector(self: @GameRoom) -> felt252 {
        Self::selector()
    }

    #[inline(always)]
    fn name_hash() -> felt252 {
        560157928997543835693733673170680268807020812320074426644216548223287727510
    }

    #[inline(always)]
    fn namespace_hash() -> felt252 {
        478818318480335965857378696073169770196363091739687234837836645523859370417
    }

    #[inline(always)]
    fn entity_id(self: @GameRoom) -> felt252 {
        core::poseidon::poseidon_hash_span(self.keys())
    }

    #[inline(always)]
    fn keys(self: @GameRoom) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.game_id, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn values(self: @GameRoom) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.player1, ref serialized);
        core::serde::Serde::serialize(self.player2, ref serialized);
        core::serde::Serde::serialize(self.invited_player, ref serialized);
        core::serde::Serde::serialize(self.state, ref serialized);
        core::serde::Serde::serialize(self.round_num, ref serialized);
        core::serde::Serde::serialize(self.phase, ref serialized);
        core::serde::Serde::serialize(self.winner, ref serialized);
        core::serde::Serde::serialize(self.timestamp_start, ref serialized);
        core::serde::Serde::serialize(self.expiry_time, ref serialized);
        core::serde::Serde::serialize(self.timestamp_end, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn layout() -> dojo::model::Layout {
        dojo::model::introspect::Introspect::<GameRoom>::layout()
    }

    #[inline(always)]
    fn instance_layout(self: @GameRoom) -> dojo::model::Layout {
        Self::layout()
    }

    #[inline(always)]
    fn packed_size() -> Option<usize> {
        dojo::model::layout::compute_packed_size(Self::layout())
    }
}

#[starknet::interface]
pub trait Igame_room<T> {
    fn ensure_abi(self: @T, model: GameRoom);
}

#[starknet::contract]
pub mod game_room {
    use super::GameRoom;
    use super::Igame_room;

    #[storage]
    struct Storage {}

    #[abi(embed_v0)]
    impl DojoModelImpl of dojo::model::IModel<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            dojo::model::Model::<GameRoom>::name()
        }

        fn namespace(self: @ContractState) -> ByteArray {
            dojo::model::Model::<GameRoom>::namespace()
        }

        fn tag(self: @ContractState) -> ByteArray {
            dojo::model::Model::<GameRoom>::tag()
        }

        fn version(self: @ContractState) -> u8 {
            dojo::model::Model::<GameRoom>::version()
        }

        fn selector(self: @ContractState) -> felt252 {
            dojo::model::Model::<GameRoom>::selector()
        }

        fn name_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<GameRoom>::name_hash()
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<GameRoom>::namespace_hash()
        }

        fn unpacked_size(self: @ContractState) -> Option<usize> {
            dojo::model::introspect::Introspect::<GameRoom>::size()
        }

        fn packed_size(self: @ContractState) -> Option<usize> {
            dojo::model::Model::<GameRoom>::packed_size()
        }

        fn layout(self: @ContractState) -> dojo::model::Layout {
            dojo::model::Model::<GameRoom>::layout()
        }

        fn schema(self: @ContractState) -> dojo::model::introspect::Ty {
            dojo::model::introspect::Introspect::<GameRoom>::ty()
        }
    }

    #[abi(embed_v0)]
    impl game_roomImpl of Igame_room<ContractState> {
        fn ensure_abi(self: @ContractState, model: GameRoom) {}
    }
}
