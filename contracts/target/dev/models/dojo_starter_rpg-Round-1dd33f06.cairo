impl RoundIntrospect<> of dojo::model::introspect::Introspect<Round<>> {
    #[inline(always)]
    fn size() -> Option<usize> {
        Option::Some(2)
    }

    fn layout() -> dojo::model::Layout {
        dojo::model::Layout::Struct(
            array![
                dojo::model::FieldLayout {
                    selector: 1184341583898067659689454586138466736838772872405140028653531917023744462787,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1349074652475883319225046112744816298759803176483728361863534926709211784352,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                }
            ]
                .span()
        )
    }

    #[inline(always)]
    fn ty() -> dojo::model::introspect::Ty {
        dojo::model::introspect::Ty::Struct(
            dojo::model::introspect::Struct {
                name: 'Round',
                attrs: array![].span(),
                children: array![
                    dojo::model::introspect::Member {
                        name: 'game_id',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<u128>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'round_number',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'player1_tries',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'player2_tries',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    }
                ]
                    .span()
            }
        )
    }
}

#[derive(Drop, Serde)]
pub struct RoundEntity {
    __id: felt252, // private field
    pub player1_tries: u8,
    pub player2_tries: u8,
}

#[generate_trait]
pub impl RoundEntityStoreImpl of RoundEntityStore {
    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> RoundEntity {
        RoundModelEntityImpl::get(world, entity_id)
    }


    fn get_player1_tries(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            RoundEntity
        >::get_member(
            world,
            entity_id,
            1184341583898067659689454586138466736838772872405140028653531917023744462787
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Round::player1_tries`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_player1_tries(self: @RoundEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1184341583898067659689454586138466736838772872405140028653531917023744462787,
                serialized.span()
            );
    }

    fn get_player2_tries(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            RoundEntity
        >::get_member(
            world,
            entity_id,
            1349074652475883319225046112744816298759803176483728361863534926709211784352
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Round::player2_tries`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_player2_tries(self: @RoundEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1349074652475883319225046112744816298759803176483728361863534926709211784352,
                serialized.span()
            );
    }
}

#[generate_trait]
pub impl RoundStoreImpl of RoundStore {
    fn entity_id_from_keys(game_id: u128, round_number: u8) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@round_number, ref serialized);

        core::poseidon::poseidon_hash_span(serialized.span())
    }

    fn from_values(ref keys: Span<felt252>, ref values: Span<felt252>) -> Round {
        let mut serialized = core::array::ArrayTrait::new();
        serialized.append_span(keys);
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity = core::serde::Serde::<Round>::deserialize(ref serialized);

        if core::option::OptionTrait::<Round>::is_none(@entity) {
            panic!(
                "Model `Round`: deserialization failed. Ensure the length of the keys tuple is matching the number of #[key] fields in the model struct."
            );
        }

        core::option::OptionTrait::<Round>::unwrap(entity)
    }

    fn get(world: dojo::world::IWorldDispatcher, game_id: u128, round_number: u8) -> Round {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@round_number, ref serialized);

        dojo::model::Model::<Round>::get(world, serialized.span())
    }


    fn get_player1_tries(
        world: dojo::world::IWorldDispatcher, game_id: u128, round_number: u8
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@round_number, ref serialized);

        let mut values = dojo::model::Model::<
            Round
        >::get_member(
            world,
            serialized.span(),
            1184341583898067659689454586138466736838772872405140028653531917023744462787
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Round::player1_tries`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_player1_tries(self: @Round, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1184341583898067659689454586138466736838772872405140028653531917023744462787,
                serialized.span()
            );
    }

    fn get_player2_tries(
        world: dojo::world::IWorldDispatcher, game_id: u128, round_number: u8
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@round_number, ref serialized);

        let mut values = dojo::model::Model::<
            Round
        >::get_member(
            world,
            serialized.span(),
            1349074652475883319225046112744816298759803176483728361863534926709211784352
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Round::player2_tries`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_player2_tries(self: @Round, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1349074652475883319225046112744816298759803176483728361863534926709211784352,
                serialized.span()
            );
    }
}

pub impl RoundModelEntityImpl of dojo::model::ModelEntity<RoundEntity> {
    fn id(self: @RoundEntity) -> felt252 {
        *self.__id
    }

    fn values(self: @RoundEntity) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.player1_tries, ref serialized);
        core::serde::Serde::serialize(self.player2_tries, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    fn from_values(entity_id: felt252, ref values: Span<felt252>) -> RoundEntity {
        let mut serialized = array![entity_id];
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity_values = core::serde::Serde::<RoundEntity>::deserialize(ref serialized);
        if core::option::OptionTrait::<RoundEntity>::is_none(@entity_values) {
            panic!("ModelEntity `RoundEntity`: deserialization failed.");
        }
        core::option::OptionTrait::<RoundEntity>::unwrap(entity_values)
    }

    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> RoundEntity {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world,
            dojo::model::Model::<Round>::selector(),
            dojo::model::ModelIndex::Id(entity_id),
            dojo::model::Model::<Round>::layout()
        );
        Self::from_values(entity_id, ref values)
    }

    fn update(self: @RoundEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            dojo::model::Model::<Round>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            self.values(),
            dojo::model::Model::<Round>::layout()
        );
    }

    fn delete(self: @RoundEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world,
            dojo::model::Model::<Round>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            dojo::model::Model::<Round>::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, entity_id: felt252, member_id: felt252,
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<Round>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    dojo::model::Model::<Round>::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @RoundEntity,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>,
    ) {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<Round>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    dojo::model::Model::<Round>::selector(),
                    dojo::model::ModelIndex::MemberId((self.id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }
}

pub impl RoundModelImpl of dojo::model::Model<Round> {
    fn get(world: dojo::world::IWorldDispatcher, keys: Span<felt252>) -> Round {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(keys), Self::layout()
        );
        let mut _keys = keys;

        RoundStore::from_values(ref _keys, ref values)
    }

    fn set(self: @Round, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            Self::selector(),
            dojo::model::ModelIndex::Keys(Self::keys(self)),
            Self::values(self),
            Self::layout()
        );
    }

    fn delete(self: @Round, world: dojo::world::IWorldDispatcher) {
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
        self: @Round,
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
        "Round"
    }

    #[inline(always)]
    fn namespace() -> ByteArray {
        "dojo_starter_rpg"
    }

    #[inline(always)]
    fn tag() -> ByteArray {
        "dojo_starter_rpg-Round"
    }

    #[inline(always)]
    fn version() -> u8 {
        1
    }

    #[inline(always)]
    fn selector() -> felt252 {
        843144519799099223241126280769278211888763376034782950829142948159995414948
    }

    #[inline(always)]
    fn instance_selector(self: @Round) -> felt252 {
        Self::selector()
    }

    #[inline(always)]
    fn name_hash() -> felt252 {
        2378486611045206855997904784098937388259087684245781916590707192397164472429
    }

    #[inline(always)]
    fn namespace_hash() -> felt252 {
        478818318480335965857378696073169770196363091739687234837836645523859370417
    }

    #[inline(always)]
    fn entity_id(self: @Round) -> felt252 {
        core::poseidon::poseidon_hash_span(self.keys())
    }

    #[inline(always)]
    fn keys(self: @Round) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.game_id, ref serialized);
        core::serde::Serde::serialize(self.round_number, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn values(self: @Round) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.player1_tries, ref serialized);
        core::serde::Serde::serialize(self.player2_tries, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn layout() -> dojo::model::Layout {
        dojo::model::introspect::Introspect::<Round>::layout()
    }

    #[inline(always)]
    fn instance_layout(self: @Round) -> dojo::model::Layout {
        Self::layout()
    }

    #[inline(always)]
    fn packed_size() -> Option<usize> {
        dojo::model::layout::compute_packed_size(Self::layout())
    }
}

#[starknet::interface]
pub trait Iround<T> {
    fn ensure_abi(self: @T, model: Round);
}

#[starknet::contract]
pub mod round {
    use super::Round;
    use super::Iround;

    #[storage]
    struct Storage {}

    #[abi(embed_v0)]
    impl DojoModelImpl of dojo::model::IModel<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Round>::name()
        }

        fn namespace(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Round>::namespace()
        }

        fn tag(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Round>::tag()
        }

        fn version(self: @ContractState) -> u8 {
            dojo::model::Model::<Round>::version()
        }

        fn selector(self: @ContractState) -> felt252 {
            dojo::model::Model::<Round>::selector()
        }

        fn name_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<Round>::name_hash()
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<Round>::namespace_hash()
        }

        fn unpacked_size(self: @ContractState) -> Option<usize> {
            dojo::model::introspect::Introspect::<Round>::size()
        }

        fn packed_size(self: @ContractState) -> Option<usize> {
            dojo::model::Model::<Round>::packed_size()
        }

        fn layout(self: @ContractState) -> dojo::model::Layout {
            dojo::model::Model::<Round>::layout()
        }

        fn schema(self: @ContractState) -> dojo::model::introspect::Ty {
            dojo::model::introspect::Introspect::<Round>::ty()
        }
    }

    #[abi(embed_v0)]
    impl roundImpl of Iround<ContractState> {
        fn ensure_abi(self: @ContractState, model: Round) {}
    }
}
