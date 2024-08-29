impl GuessesIntrospect<> of dojo::model::introspect::Introspect<Guesses<>> {
    #[inline(always)]
    fn size() -> Option<usize> {
        Option::Some(3)
    }

    fn layout() -> dojo::model::Layout {
        dojo::model::Layout::Struct(
            array![
                dojo::model::FieldLayout {
                    selector: 991302466560584285745353186305489681058071371187230676561154356929796083602,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1499006368436695795350184075840509077102494740102013349566501763022376879713,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 170156187694754337098908872608524399503794109441630052808502022112289886855,
                    layout: dojo::model::introspect::Introspect::<bool>::layout()
                }
            ]
                .span()
        )
    }

    #[inline(always)]
    fn ty() -> dojo::model::introspect::Ty {
        dojo::model::introspect::Ty::Struct(
            dojo::model::introspect::Struct {
                name: 'Guesses',
                attrs: array![].span(),
                children: array![
                    dojo::model::introspect::Member {
                        name: 'game_id',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<u128>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'player_id',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<ContractAddress>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'x',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'y',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'index',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'round_number',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'correct',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<bool>::ty()
                    }
                ]
                    .span()
            }
        )
    }
}

#[derive(Drop, Serde)]
pub struct GuessesEntity {
    __id: felt252, // private field
    pub index: u8,
    pub round_number: u8,
    pub correct: bool,
}

#[generate_trait]
pub impl GuessesEntityStoreImpl of GuessesEntityStore {
    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> GuessesEntity {
        GuessesModelEntityImpl::get(world, entity_id)
    }


    fn get_index(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            GuessesEntity
        >::get_member(
            world,
            entity_id,
            991302466560584285745353186305489681058071371187230676561154356929796083602
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Guesses::index`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_index(self: @GuessesEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                991302466560584285745353186305489681058071371187230676561154356929796083602,
                serialized.span()
            );
    }

    fn get_round_number(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            GuessesEntity
        >::get_member(
            world,
            entity_id,
            1499006368436695795350184075840509077102494740102013349566501763022376879713
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Guesses::round_number`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_round_number(self: @GuessesEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1499006368436695795350184075840509077102494740102013349566501763022376879713,
                serialized.span()
            );
    }

    fn get_correct(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> bool {
        let mut values = dojo::model::ModelEntity::<
            GuessesEntity
        >::get_member(
            world,
            entity_id,
            170156187694754337098908872608524399503794109441630052808502022112289886855
        );
        let field_value = core::serde::Serde::<bool>::deserialize(ref values);

        if core::option::OptionTrait::<bool>::is_none(@field_value) {
            panic!("Field `Guesses::correct`: deserialization failed.");
        }

        core::option::OptionTrait::<bool>::unwrap(field_value)
    }

    fn set_correct(self: @GuessesEntity, world: dojo::world::IWorldDispatcher, value: bool) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                170156187694754337098908872608524399503794109441630052808502022112289886855,
                serialized.span()
            );
    }
}

#[generate_trait]
pub impl GuessesStoreImpl of GuessesStore {
    fn entity_id_from_keys(game_id: u128, player_id: ContractAddress, x: u8, y: u8) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@x, ref serialized);
        core::serde::Serde::serialize(@y, ref serialized);

        core::poseidon::poseidon_hash_span(serialized.span())
    }

    fn from_values(ref keys: Span<felt252>, ref values: Span<felt252>) -> Guesses {
        let mut serialized = core::array::ArrayTrait::new();
        serialized.append_span(keys);
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity = core::serde::Serde::<Guesses>::deserialize(ref serialized);

        if core::option::OptionTrait::<Guesses>::is_none(@entity) {
            panic!(
                "Model `Guesses`: deserialization failed. Ensure the length of the keys tuple is matching the number of #[key] fields in the model struct."
            );
        }

        core::option::OptionTrait::<Guesses>::unwrap(entity)
    }

    fn get(
        world: dojo::world::IWorldDispatcher,
        game_id: u128,
        player_id: ContractAddress,
        x: u8,
        y: u8
    ) -> Guesses {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@x, ref serialized);
        core::serde::Serde::serialize(@y, ref serialized);

        dojo::model::Model::<Guesses>::get(world, serialized.span())
    }


    fn get_index(
        world: dojo::world::IWorldDispatcher,
        game_id: u128,
        player_id: ContractAddress,
        x: u8,
        y: u8
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@x, ref serialized);
        core::serde::Serde::serialize(@y, ref serialized);

        let mut values = dojo::model::Model::<
            Guesses
        >::get_member(
            world,
            serialized.span(),
            991302466560584285745353186305489681058071371187230676561154356929796083602
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Guesses::index`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_index(self: @Guesses, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                991302466560584285745353186305489681058071371187230676561154356929796083602,
                serialized.span()
            );
    }

    fn get_round_number(
        world: dojo::world::IWorldDispatcher,
        game_id: u128,
        player_id: ContractAddress,
        x: u8,
        y: u8
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@x, ref serialized);
        core::serde::Serde::serialize(@y, ref serialized);

        let mut values = dojo::model::Model::<
            Guesses
        >::get_member(
            world,
            serialized.span(),
            1499006368436695795350184075840509077102494740102013349566501763022376879713
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Guesses::round_number`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_round_number(self: @Guesses, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1499006368436695795350184075840509077102494740102013349566501763022376879713,
                serialized.span()
            );
    }

    fn get_correct(
        world: dojo::world::IWorldDispatcher,
        game_id: u128,
        player_id: ContractAddress,
        x: u8,
        y: u8
    ) -> bool {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@x, ref serialized);
        core::serde::Serde::serialize(@y, ref serialized);

        let mut values = dojo::model::Model::<
            Guesses
        >::get_member(
            world,
            serialized.span(),
            170156187694754337098908872608524399503794109441630052808502022112289886855
        );

        let field_value = core::serde::Serde::<bool>::deserialize(ref values);

        if core::option::OptionTrait::<bool>::is_none(@field_value) {
            panic!("Field `Guesses::correct`: deserialization failed.");
        }

        core::option::OptionTrait::<bool>::unwrap(field_value)
    }

    fn set_correct(self: @Guesses, world: dojo::world::IWorldDispatcher, value: bool) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                170156187694754337098908872608524399503794109441630052808502022112289886855,
                serialized.span()
            );
    }
}

pub impl GuessesModelEntityImpl of dojo::model::ModelEntity<GuessesEntity> {
    fn id(self: @GuessesEntity) -> felt252 {
        *self.__id
    }

    fn values(self: @GuessesEntity) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.index, ref serialized);
        core::serde::Serde::serialize(self.round_number, ref serialized);
        core::serde::Serde::serialize(self.correct, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    fn from_values(entity_id: felt252, ref values: Span<felt252>) -> GuessesEntity {
        let mut serialized = array![entity_id];
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity_values = core::serde::Serde::<GuessesEntity>::deserialize(ref serialized);
        if core::option::OptionTrait::<GuessesEntity>::is_none(@entity_values) {
            panic!("ModelEntity `GuessesEntity`: deserialization failed.");
        }
        core::option::OptionTrait::<GuessesEntity>::unwrap(entity_values)
    }

    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> GuessesEntity {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world,
            dojo::model::Model::<Guesses>::selector(),
            dojo::model::ModelIndex::Id(entity_id),
            dojo::model::Model::<Guesses>::layout()
        );
        Self::from_values(entity_id, ref values)
    }

    fn update(self: @GuessesEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            dojo::model::Model::<Guesses>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            self.values(),
            dojo::model::Model::<Guesses>::layout()
        );
    }

    fn delete(self: @GuessesEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world,
            dojo::model::Model::<Guesses>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            dojo::model::Model::<Guesses>::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, entity_id: felt252, member_id: felt252,
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<Guesses>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    dojo::model::Model::<Guesses>::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @GuessesEntity,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>,
    ) {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<Guesses>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    dojo::model::Model::<Guesses>::selector(),
                    dojo::model::ModelIndex::MemberId((self.id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }
}

pub impl GuessesModelImpl of dojo::model::Model<Guesses> {
    fn get(world: dojo::world::IWorldDispatcher, keys: Span<felt252>) -> Guesses {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(keys), Self::layout()
        );
        let mut _keys = keys;

        GuessesStore::from_values(ref _keys, ref values)
    }

    fn set(self: @Guesses, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            Self::selector(),
            dojo::model::ModelIndex::Keys(Self::keys(self)),
            Self::values(self),
            Self::layout()
        );
    }

    fn delete(self: @Guesses, world: dojo::world::IWorldDispatcher) {
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
        self: @Guesses,
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
        "Guesses"
    }

    #[inline(always)]
    fn namespace() -> ByteArray {
        "tisland"
    }

    #[inline(always)]
    fn tag() -> ByteArray {
        "tisland-Guesses"
    }

    #[inline(always)]
    fn version() -> u8 {
        1
    }

    #[inline(always)]
    fn selector() -> felt252 {
        3413809714034921065108481177178561179506672453792077387202848462913654614608
    }

    #[inline(always)]
    fn instance_selector(self: @Guesses) -> felt252 {
        Self::selector()
    }

    #[inline(always)]
    fn name_hash() -> felt252 {
        2658681803305375094192535814874928611356027733871680509547089522392253115944
    }

    #[inline(always)]
    fn namespace_hash() -> felt252 {
        785100407485574687708722636754133465572252000084726510320129847110016753675
    }

    #[inline(always)]
    fn entity_id(self: @Guesses) -> felt252 {
        core::poseidon::poseidon_hash_span(self.keys())
    }

    #[inline(always)]
    fn keys(self: @Guesses) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.game_id, ref serialized);
        core::serde::Serde::serialize(self.player_id, ref serialized);
        core::serde::Serde::serialize(self.x, ref serialized);
        core::serde::Serde::serialize(self.y, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn values(self: @Guesses) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.index, ref serialized);
        core::serde::Serde::serialize(self.round_number, ref serialized);
        core::serde::Serde::serialize(self.correct, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn layout() -> dojo::model::Layout {
        dojo::model::introspect::Introspect::<Guesses>::layout()
    }

    #[inline(always)]
    fn instance_layout(self: @Guesses) -> dojo::model::Layout {
        Self::layout()
    }

    #[inline(always)]
    fn packed_size() -> Option<usize> {
        dojo::model::layout::compute_packed_size(Self::layout())
    }
}

#[starknet::interface]
pub trait Iguesses<T> {
    fn ensure_abi(self: @T, model: Guesses);
}

#[starknet::contract]
pub mod guesses {
    use super::Guesses;
    use super::Iguesses;

    #[storage]
    struct Storage {}

    #[abi(embed_v0)]
    impl DojoModelImpl of dojo::model::IModel<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Guesses>::name()
        }

        fn namespace(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Guesses>::namespace()
        }

        fn tag(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Guesses>::tag()
        }

        fn version(self: @ContractState) -> u8 {
            dojo::model::Model::<Guesses>::version()
        }

        fn selector(self: @ContractState) -> felt252 {
            dojo::model::Model::<Guesses>::selector()
        }

        fn name_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<Guesses>::name_hash()
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<Guesses>::namespace_hash()
        }

        fn unpacked_size(self: @ContractState) -> Option<usize> {
            dojo::model::introspect::Introspect::<Guesses>::size()
        }

        fn packed_size(self: @ContractState) -> Option<usize> {
            dojo::model::Model::<Guesses>::packed_size()
        }

        fn layout(self: @ContractState) -> dojo::model::Layout {
            dojo::model::Model::<Guesses>::layout()
        }

        fn schema(self: @ContractState) -> dojo::model::introspect::Ty {
            dojo::model::introspect::Introspect::<Guesses>::ty()
        }
    }

    #[abi(embed_v0)]
    impl guessesImpl of Iguesses<ContractState> {
        fn ensure_abi(self: @ContractState, model: Guesses) {}
    }
}
