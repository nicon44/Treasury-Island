impl IslandCoordsIntrospect<> of dojo::model::introspect::Introspect<IslandCoords<>> {
    #[inline(always)]
    fn size() -> Option<usize> {
        Option::Some(2)
    }

    fn layout() -> dojo::model::Layout {
        dojo::model::Layout::Struct(
            array![
                dojo::model::FieldLayout {
                    selector: 943480028150799433768725176691062332593264118298318849671136844040011965190,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 819565989059522844259768551623021755126829489938126200284035878187830780312,
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
                name: 'IslandCoords',
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
                        name: 'terrain',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'loot_id',
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
pub struct IslandCoordsEntity {
    __id: felt252, // private field
    pub terrain: u8,
    pub loot_id: u8,
}

#[generate_trait]
pub impl IslandCoordsEntityStoreImpl of IslandCoordsEntityStore {
    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> IslandCoordsEntity {
        IslandCoordsModelEntityImpl::get(world, entity_id)
    }


    fn get_terrain(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            IslandCoordsEntity
        >::get_member(
            world,
            entity_id,
            943480028150799433768725176691062332593264118298318849671136844040011965190
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `IslandCoords::terrain`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_terrain(self: @IslandCoordsEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                943480028150799433768725176691062332593264118298318849671136844040011965190,
                serialized.span()
            );
    }

    fn get_loot_id(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            IslandCoordsEntity
        >::get_member(
            world,
            entity_id,
            819565989059522844259768551623021755126829489938126200284035878187830780312
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `IslandCoords::loot_id`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_loot_id(self: @IslandCoordsEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                819565989059522844259768551623021755126829489938126200284035878187830780312,
                serialized.span()
            );
    }
}

#[generate_trait]
pub impl IslandCoordsStoreImpl of IslandCoordsStore {
    fn entity_id_from_keys(game_id: u128, player_id: ContractAddress, x: u8, y: u8) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@x, ref serialized);
        core::serde::Serde::serialize(@y, ref serialized);

        core::poseidon::poseidon_hash_span(serialized.span())
    }

    fn from_values(ref keys: Span<felt252>, ref values: Span<felt252>) -> IslandCoords {
        let mut serialized = core::array::ArrayTrait::new();
        serialized.append_span(keys);
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity = core::serde::Serde::<IslandCoords>::deserialize(ref serialized);

        if core::option::OptionTrait::<IslandCoords>::is_none(@entity) {
            panic!(
                "Model `IslandCoords`: deserialization failed. Ensure the length of the keys tuple is matching the number of #[key] fields in the model struct."
            );
        }

        core::option::OptionTrait::<IslandCoords>::unwrap(entity)
    }

    fn get(
        world: dojo::world::IWorldDispatcher,
        game_id: u128,
        player_id: ContractAddress,
        x: u8,
        y: u8
    ) -> IslandCoords {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@x, ref serialized);
        core::serde::Serde::serialize(@y, ref serialized);

        dojo::model::Model::<IslandCoords>::get(world, serialized.span())
    }


    fn get_terrain(
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
            IslandCoords
        >::get_member(
            world,
            serialized.span(),
            943480028150799433768725176691062332593264118298318849671136844040011965190
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `IslandCoords::terrain`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_terrain(self: @IslandCoords, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                943480028150799433768725176691062332593264118298318849671136844040011965190,
                serialized.span()
            );
    }

    fn get_loot_id(
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
            IslandCoords
        >::get_member(
            world,
            serialized.span(),
            819565989059522844259768551623021755126829489938126200284035878187830780312
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `IslandCoords::loot_id`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_loot_id(self: @IslandCoords, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                819565989059522844259768551623021755126829489938126200284035878187830780312,
                serialized.span()
            );
    }
}

pub impl IslandCoordsModelEntityImpl of dojo::model::ModelEntity<IslandCoordsEntity> {
    fn id(self: @IslandCoordsEntity) -> felt252 {
        *self.__id
    }

    fn values(self: @IslandCoordsEntity) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.terrain, ref serialized);
        core::serde::Serde::serialize(self.loot_id, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    fn from_values(entity_id: felt252, ref values: Span<felt252>) -> IslandCoordsEntity {
        let mut serialized = array![entity_id];
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity_values = core::serde::Serde::<IslandCoordsEntity>::deserialize(ref serialized);
        if core::option::OptionTrait::<IslandCoordsEntity>::is_none(@entity_values) {
            panic!("ModelEntity `IslandCoordsEntity`: deserialization failed.");
        }
        core::option::OptionTrait::<IslandCoordsEntity>::unwrap(entity_values)
    }

    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> IslandCoordsEntity {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world,
            dojo::model::Model::<IslandCoords>::selector(),
            dojo::model::ModelIndex::Id(entity_id),
            dojo::model::Model::<IslandCoords>::layout()
        );
        Self::from_values(entity_id, ref values)
    }

    fn update(self: @IslandCoordsEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            dojo::model::Model::<IslandCoords>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            self.values(),
            dojo::model::Model::<IslandCoords>::layout()
        );
    }

    fn delete(self: @IslandCoordsEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world,
            dojo::model::Model::<IslandCoords>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            dojo::model::Model::<IslandCoords>::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, entity_id: felt252, member_id: felt252,
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<IslandCoords>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    dojo::model::Model::<IslandCoords>::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @IslandCoordsEntity,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>,
    ) {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<IslandCoords>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    dojo::model::Model::<IslandCoords>::selector(),
                    dojo::model::ModelIndex::MemberId((self.id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }
}

pub impl IslandCoordsModelImpl of dojo::model::Model<IslandCoords> {
    fn get(world: dojo::world::IWorldDispatcher, keys: Span<felt252>) -> IslandCoords {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(keys), Self::layout()
        );
        let mut _keys = keys;

        IslandCoordsStore::from_values(ref _keys, ref values)
    }

    fn set(self: @IslandCoords, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            Self::selector(),
            dojo::model::ModelIndex::Keys(Self::keys(self)),
            Self::values(self),
            Self::layout()
        );
    }

    fn delete(self: @IslandCoords, world: dojo::world::IWorldDispatcher) {
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
        self: @IslandCoords,
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
        "IslandCoords"
    }

    #[inline(always)]
    fn namespace() -> ByteArray {
        "dojo_starter_rpg"
    }

    #[inline(always)]
    fn tag() -> ByteArray {
        "dojo_starter_rpg-IslandCoords"
    }

    #[inline(always)]
    fn version() -> u8 {
        1
    }

    #[inline(always)]
    fn selector() -> felt252 {
        871049725659933611319034047680441846102164515449374585698468655561428783736
    }

    #[inline(always)]
    fn instance_selector(self: @IslandCoords) -> felt252 {
        Self::selector()
    }

    #[inline(always)]
    fn name_hash() -> felt252 {
        848234890212472166388692293708012987469332215557259924980439640871586261339
    }

    #[inline(always)]
    fn namespace_hash() -> felt252 {
        478818318480335965857378696073169770196363091739687234837836645523859370417
    }

    #[inline(always)]
    fn entity_id(self: @IslandCoords) -> felt252 {
        core::poseidon::poseidon_hash_span(self.keys())
    }

    #[inline(always)]
    fn keys(self: @IslandCoords) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.game_id, ref serialized);
        core::serde::Serde::serialize(self.player_id, ref serialized);
        core::serde::Serde::serialize(self.x, ref serialized);
        core::serde::Serde::serialize(self.y, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn values(self: @IslandCoords) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.terrain, ref serialized);
        core::serde::Serde::serialize(self.loot_id, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn layout() -> dojo::model::Layout {
        dojo::model::introspect::Introspect::<IslandCoords>::layout()
    }

    #[inline(always)]
    fn instance_layout(self: @IslandCoords) -> dojo::model::Layout {
        Self::layout()
    }

    #[inline(always)]
    fn packed_size() -> Option<usize> {
        dojo::model::layout::compute_packed_size(Self::layout())
    }
}

#[starknet::interface]
pub trait Iisland_coords<T> {
    fn ensure_abi(self: @T, model: IslandCoords);
}

#[starknet::contract]
pub mod island_coords {
    use super::IslandCoords;
    use super::Iisland_coords;

    #[storage]
    struct Storage {}

    #[abi(embed_v0)]
    impl DojoModelImpl of dojo::model::IModel<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            dojo::model::Model::<IslandCoords>::name()
        }

        fn namespace(self: @ContractState) -> ByteArray {
            dojo::model::Model::<IslandCoords>::namespace()
        }

        fn tag(self: @ContractState) -> ByteArray {
            dojo::model::Model::<IslandCoords>::tag()
        }

        fn version(self: @ContractState) -> u8 {
            dojo::model::Model::<IslandCoords>::version()
        }

        fn selector(self: @ContractState) -> felt252 {
            dojo::model::Model::<IslandCoords>::selector()
        }

        fn name_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<IslandCoords>::name_hash()
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<IslandCoords>::namespace_hash()
        }

        fn unpacked_size(self: @ContractState) -> Option<usize> {
            dojo::model::introspect::Introspect::<IslandCoords>::size()
        }

        fn packed_size(self: @ContractState) -> Option<usize> {
            dojo::model::Model::<IslandCoords>::packed_size()
        }

        fn layout(self: @ContractState) -> dojo::model::Layout {
            dojo::model::Model::<IslandCoords>::layout()
        }

        fn schema(self: @ContractState) -> dojo::model::introspect::Ty {
            dojo::model::introspect::Introspect::<IslandCoords>::ty()
        }
    }

    #[abi(embed_v0)]
    impl island_coordsImpl of Iisland_coords<ContractState> {
        fn ensure_abi(self: @ContractState, model: IslandCoords) {}
    }
}
