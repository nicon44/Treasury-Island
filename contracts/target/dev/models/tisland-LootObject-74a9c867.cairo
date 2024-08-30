impl LootObjectIntrospect<> of dojo::model::introspect::Introspect<LootObject<>> {
    #[inline(always)]
    fn size() -> Option<usize> {
        Option::None
    }

    fn layout() -> dojo::model::Layout {
        dojo::model::Layout::Struct(
            array![
                dojo::model::FieldLayout {
                    selector: 1354470097471505522082285973732761176695191134732292910278310109907308422782,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 950763780303609271834337726932658199356736630392578411982380454752446405967,
                    layout: dojo::model::introspect::Introspect::<Array<u8>>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1314402147210068400989830718729646126726689092786224701878726430070789431799,
                    layout: dojo::model::introspect::Introspect::<Array<u8>>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1801205247187906759946076809133204769177756677923733672487501520919685654843,
                    layout: dojo::model::introspect::Introspect::<bool>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1049087840237126961539694639105830725211899747760805922658745417712327992245,
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
                name: 'LootObject',
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
                        name: 'loot_id',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'loot_length',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'hidden_indices',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Ty::Array(
                            array![dojo::model::introspect::Introspect::<u8>::ty()].span()
                        )
                    },
                    dojo::model::introspect::Member {
                        name: 'revealed_indices',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Ty::Array(
                            array![dojo::model::introspect::Introspect::<u8>::ty()].span()
                        )
                    },
                    dojo::model::introspect::Member {
                        name: 'hidden',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<bool>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'active',
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
pub struct LootObjectEntity {
    __id: felt252, // private field
    pub loot_length: u8,
    pub hidden_indices: Array<u8>,
    pub revealed_indices: Array<u8>,
    pub hidden: bool,
    pub active: bool,
}

#[generate_trait]
pub impl LootObjectEntityStoreImpl of LootObjectEntityStore {
    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> LootObjectEntity {
        LootObjectModelEntityImpl::get(world, entity_id)
    }


    fn get_loot_length(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootObjectEntity
        >::get_member(
            world,
            entity_id,
            1354470097471505522082285973732761176695191134732292910278310109907308422782
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `LootObject::loot_length`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_loot_length(self: @LootObjectEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1354470097471505522082285973732761176695191134732292910278310109907308422782,
                serialized.span()
            );
    }

    fn get_hidden_indices(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> Array<u8> {
        let mut values = dojo::model::ModelEntity::<
            LootObjectEntity
        >::get_member(
            world,
            entity_id,
            950763780303609271834337726932658199356736630392578411982380454752446405967
        );
        let field_value = core::serde::Serde::<Array<u8>>::deserialize(ref values);

        if core::option::OptionTrait::<Array<u8>>::is_none(@field_value) {
            panic!("Field `LootObject::hidden_indices`: deserialization failed.");
        }

        core::option::OptionTrait::<Array<u8>>::unwrap(field_value)
    }

    fn set_hidden_indices(
        self: @LootObjectEntity, world: dojo::world::IWorldDispatcher, value: Array<u8>
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                950763780303609271834337726932658199356736630392578411982380454752446405967,
                serialized.span()
            );
    }

    fn get_revealed_indices(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> Array<u8> {
        let mut values = dojo::model::ModelEntity::<
            LootObjectEntity
        >::get_member(
            world,
            entity_id,
            1314402147210068400989830718729646126726689092786224701878726430070789431799
        );
        let field_value = core::serde::Serde::<Array<u8>>::deserialize(ref values);

        if core::option::OptionTrait::<Array<u8>>::is_none(@field_value) {
            panic!("Field `LootObject::revealed_indices`: deserialization failed.");
        }

        core::option::OptionTrait::<Array<u8>>::unwrap(field_value)
    }

    fn set_revealed_indices(
        self: @LootObjectEntity, world: dojo::world::IWorldDispatcher, value: Array<u8>
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1314402147210068400989830718729646126726689092786224701878726430070789431799,
                serialized.span()
            );
    }

    fn get_hidden(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> bool {
        let mut values = dojo::model::ModelEntity::<
            LootObjectEntity
        >::get_member(
            world,
            entity_id,
            1801205247187906759946076809133204769177756677923733672487501520919685654843
        );
        let field_value = core::serde::Serde::<bool>::deserialize(ref values);

        if core::option::OptionTrait::<bool>::is_none(@field_value) {
            panic!("Field `LootObject::hidden`: deserialization failed.");
        }

        core::option::OptionTrait::<bool>::unwrap(field_value)
    }

    fn set_hidden(self: @LootObjectEntity, world: dojo::world::IWorldDispatcher, value: bool) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1801205247187906759946076809133204769177756677923733672487501520919685654843,
                serialized.span()
            );
    }

    fn get_active(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> bool {
        let mut values = dojo::model::ModelEntity::<
            LootObjectEntity
        >::get_member(
            world,
            entity_id,
            1049087840237126961539694639105830725211899747760805922658745417712327992245
        );
        let field_value = core::serde::Serde::<bool>::deserialize(ref values);

        if core::option::OptionTrait::<bool>::is_none(@field_value) {
            panic!("Field `LootObject::active`: deserialization failed.");
        }

        core::option::OptionTrait::<bool>::unwrap(field_value)
    }

    fn set_active(self: @LootObjectEntity, world: dojo::world::IWorldDispatcher, value: bool) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1049087840237126961539694639105830725211899747760805922658745417712327992245,
                serialized.span()
            );
    }
}

#[generate_trait]
pub impl LootObjectStoreImpl of LootObjectStore {
    fn entity_id_from_keys(game_id: u128, player_id: ContractAddress, loot_id: u8) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@loot_id, ref serialized);

        core::poseidon::poseidon_hash_span(serialized.span())
    }

    fn from_values(ref keys: Span<felt252>, ref values: Span<felt252>) -> LootObject {
        let mut serialized = core::array::ArrayTrait::new();
        serialized.append_span(keys);
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity = core::serde::Serde::<LootObject>::deserialize(ref serialized);

        if core::option::OptionTrait::<LootObject>::is_none(@entity) {
            panic!(
                "Model `LootObject`: deserialization failed. Ensure the length of the keys tuple is matching the number of #[key] fields in the model struct."
            );
        }

        core::option::OptionTrait::<LootObject>::unwrap(entity)
    }

    fn get(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress, loot_id: u8
    ) -> LootObject {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@loot_id, ref serialized);

        dojo::model::Model::<LootObject>::get(world, serialized.span())
    }


    fn get_loot_length(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress, loot_id: u8
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@loot_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootObject
        >::get_member(
            world,
            serialized.span(),
            1354470097471505522082285973732761176695191134732292910278310109907308422782
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `LootObject::loot_length`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_loot_length(self: @LootObject, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1354470097471505522082285973732761176695191134732292910278310109907308422782,
                serialized.span()
            );
    }

    fn get_hidden_indices(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress, loot_id: u8
    ) -> Array<u8> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@loot_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootObject
        >::get_member(
            world,
            serialized.span(),
            950763780303609271834337726932658199356736630392578411982380454752446405967
        );

        let field_value = core::serde::Serde::<Array<u8>>::deserialize(ref values);

        if core::option::OptionTrait::<Array<u8>>::is_none(@field_value) {
            panic!("Field `LootObject::hidden_indices`: deserialization failed.");
        }

        core::option::OptionTrait::<Array<u8>>::unwrap(field_value)
    }

    fn set_hidden_indices(
        self: @LootObject, world: dojo::world::IWorldDispatcher, value: Array<u8>
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                950763780303609271834337726932658199356736630392578411982380454752446405967,
                serialized.span()
            );
    }

    fn get_revealed_indices(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress, loot_id: u8
    ) -> Array<u8> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@loot_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootObject
        >::get_member(
            world,
            serialized.span(),
            1314402147210068400989830718729646126726689092786224701878726430070789431799
        );

        let field_value = core::serde::Serde::<Array<u8>>::deserialize(ref values);

        if core::option::OptionTrait::<Array<u8>>::is_none(@field_value) {
            panic!("Field `LootObject::revealed_indices`: deserialization failed.");
        }

        core::option::OptionTrait::<Array<u8>>::unwrap(field_value)
    }

    fn set_revealed_indices(
        self: @LootObject, world: dojo::world::IWorldDispatcher, value: Array<u8>
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1314402147210068400989830718729646126726689092786224701878726430070789431799,
                serialized.span()
            );
    }

    fn get_hidden(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress, loot_id: u8
    ) -> bool {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@loot_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootObject
        >::get_member(
            world,
            serialized.span(),
            1801205247187906759946076809133204769177756677923733672487501520919685654843
        );

        let field_value = core::serde::Serde::<bool>::deserialize(ref values);

        if core::option::OptionTrait::<bool>::is_none(@field_value) {
            panic!("Field `LootObject::hidden`: deserialization failed.");
        }

        core::option::OptionTrait::<bool>::unwrap(field_value)
    }

    fn set_hidden(self: @LootObject, world: dojo::world::IWorldDispatcher, value: bool) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1801205247187906759946076809133204769177756677923733672487501520919685654843,
                serialized.span()
            );
    }

    fn get_active(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress, loot_id: u8
    ) -> bool {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);
        core::serde::Serde::serialize(@loot_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootObject
        >::get_member(
            world,
            serialized.span(),
            1049087840237126961539694639105830725211899747760805922658745417712327992245
        );

        let field_value = core::serde::Serde::<bool>::deserialize(ref values);

        if core::option::OptionTrait::<bool>::is_none(@field_value) {
            panic!("Field `LootObject::active`: deserialization failed.");
        }

        core::option::OptionTrait::<bool>::unwrap(field_value)
    }

    fn set_active(self: @LootObject, world: dojo::world::IWorldDispatcher, value: bool) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1049087840237126961539694639105830725211899747760805922658745417712327992245,
                serialized.span()
            );
    }
}

pub impl LootObjectModelEntityImpl of dojo::model::ModelEntity<LootObjectEntity> {
    fn id(self: @LootObjectEntity) -> felt252 {
        *self.__id
    }

    fn values(self: @LootObjectEntity) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.loot_length, ref serialized);
        core::serde::Serde::serialize(self.hidden_indices, ref serialized);
        core::serde::Serde::serialize(self.revealed_indices, ref serialized);
        core::serde::Serde::serialize(self.hidden, ref serialized);
        core::serde::Serde::serialize(self.active, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    fn from_values(entity_id: felt252, ref values: Span<felt252>) -> LootObjectEntity {
        let mut serialized = array![entity_id];
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity_values = core::serde::Serde::<LootObjectEntity>::deserialize(ref serialized);
        if core::option::OptionTrait::<LootObjectEntity>::is_none(@entity_values) {
            panic!("ModelEntity `LootObjectEntity`: deserialization failed.");
        }
        core::option::OptionTrait::<LootObjectEntity>::unwrap(entity_values)
    }

    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> LootObjectEntity {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world,
            dojo::model::Model::<LootObject>::selector(),
            dojo::model::ModelIndex::Id(entity_id),
            dojo::model::Model::<LootObject>::layout()
        );
        Self::from_values(entity_id, ref values)
    }

    fn update(self: @LootObjectEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            dojo::model::Model::<LootObject>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            self.values(),
            dojo::model::Model::<LootObject>::layout()
        );
    }

    fn delete(self: @LootObjectEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world,
            dojo::model::Model::<LootObject>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            dojo::model::Model::<LootObject>::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, entity_id: felt252, member_id: felt252,
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<LootObject>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    dojo::model::Model::<LootObject>::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @LootObjectEntity,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>,
    ) {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<LootObject>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    dojo::model::Model::<LootObject>::selector(),
                    dojo::model::ModelIndex::MemberId((self.id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }
}

pub impl LootObjectModelImpl of dojo::model::Model<LootObject> {
    fn get(world: dojo::world::IWorldDispatcher, keys: Span<felt252>) -> LootObject {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(keys), Self::layout()
        );
        let mut _keys = keys;

        LootObjectStore::from_values(ref _keys, ref values)
    }

    fn set(self: @LootObject, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            Self::selector(),
            dojo::model::ModelIndex::Keys(Self::keys(self)),
            Self::values(self),
            Self::layout()
        );
    }

    fn delete(self: @LootObject, world: dojo::world::IWorldDispatcher) {
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
        self: @LootObject,
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
        "LootObject"
    }

    #[inline(always)]
    fn namespace() -> ByteArray {
        "tisland"
    }

    #[inline(always)]
    fn tag() -> ByteArray {
        "tisland-LootObject"
    }

    #[inline(always)]
    fn version() -> u8 {
        1
    }

    #[inline(always)]
    fn selector() -> felt252 {
        3298016919956478416052437890428766139960407763004473792730333491579565102133
    }

    #[inline(always)]
    fn instance_selector(self: @LootObject) -> felt252 {
        Self::selector()
    }

    #[inline(always)]
    fn name_hash() -> felt252 {
        2818579322304320968034131235743160742439635876373049017240825747224408154034
    }

    #[inline(always)]
    fn namespace_hash() -> felt252 {
        785100407485574687708722636754133465572252000084726510320129847110016753675
    }

    #[inline(always)]
    fn entity_id(self: @LootObject) -> felt252 {
        core::poseidon::poseidon_hash_span(self.keys())
    }

    #[inline(always)]
    fn keys(self: @LootObject) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.game_id, ref serialized);
        core::serde::Serde::serialize(self.player_id, ref serialized);
        core::serde::Serde::serialize(self.loot_id, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn values(self: @LootObject) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.loot_length, ref serialized);
        core::serde::Serde::serialize(self.hidden_indices, ref serialized);
        core::serde::Serde::serialize(self.revealed_indices, ref serialized);
        core::serde::Serde::serialize(self.hidden, ref serialized);
        core::serde::Serde::serialize(self.active, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn layout() -> dojo::model::Layout {
        dojo::model::introspect::Introspect::<LootObject>::layout()
    }

    #[inline(always)]
    fn instance_layout(self: @LootObject) -> dojo::model::Layout {
        Self::layout()
    }

    #[inline(always)]
    fn packed_size() -> Option<usize> {
        dojo::model::layout::compute_packed_size(Self::layout())
    }
}

#[starknet::interface]
pub trait Iloot_object<T> {
    fn ensure_abi(self: @T, model: LootObject);
}

#[starknet::contract]
pub mod loot_object {
    use super::LootObject;
    use super::Iloot_object;

    #[storage]
    struct Storage {}

    #[abi(embed_v0)]
    impl DojoModelImpl of dojo::model::IModel<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            dojo::model::Model::<LootObject>::name()
        }

        fn namespace(self: @ContractState) -> ByteArray {
            dojo::model::Model::<LootObject>::namespace()
        }

        fn tag(self: @ContractState) -> ByteArray {
            dojo::model::Model::<LootObject>::tag()
        }

        fn version(self: @ContractState) -> u8 {
            dojo::model::Model::<LootObject>::version()
        }

        fn selector(self: @ContractState) -> felt252 {
            dojo::model::Model::<LootObject>::selector()
        }

        fn name_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<LootObject>::name_hash()
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<LootObject>::namespace_hash()
        }

        fn unpacked_size(self: @ContractState) -> Option<usize> {
            dojo::model::introspect::Introspect::<LootObject>::size()
        }

        fn packed_size(self: @ContractState) -> Option<usize> {
            dojo::model::Model::<LootObject>::packed_size()
        }

        fn layout(self: @ContractState) -> dojo::model::Layout {
            dojo::model::Model::<LootObject>::layout()
        }

        fn schema(self: @ContractState) -> dojo::model::introspect::Ty {
            dojo::model::introspect::Introspect::<LootObject>::ty()
        }
    }

    #[abi(embed_v0)]
    impl loot_objectImpl of Iloot_object<ContractState> {
        fn ensure_abi(self: @ContractState, model: LootObject) {}
    }
}
