impl LootTrackerIntrospect<> of dojo::model::introspect::Introspect<LootTracker<>> {
    #[inline(always)]
    fn size() -> Option<usize> {
        Option::None
    }

    fn layout() -> dojo::model::Layout {
        dojo::model::Layout::Struct(
            array![
                dojo::model::FieldLayout {
                    selector: 258586962301152085809869000061689983348862767961447622993907670218484461853,
                    layout: dojo::model::introspect::Introspect::<Array<u8>>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 670297249349482973289422853708617522317650136682930507334393558818801459076,
                    layout: dojo::model::introspect::Introspect::<LOcounter>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 528995930834704123929827168397826098622129123381459310688623742368678438694,
                    layout: dojo::model::introspect::Introspect::<LOcounter>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 299960375717568744758137858487636614582198958944961298515835616687436813676,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 92086068644629347411958562988333133643492157048370128101644191777840845919,
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
                name: 'LootTracker',
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
                        name: 'loot_ids',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Ty::Array(
                            array![dojo::model::introspect::Introspect::<u8>::ty()].span()
                        )
                    },
                    dojo::model::introspect::Member {
                        name: 'loot_count',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<LOcounter>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'loot_hidden_count',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<LOcounter>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'shovels',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'traps',
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
pub struct LootTrackerEntity {
    __id: felt252, // private field
    pub loot_ids: Array<u8>,
    pub loot_count: LOcounter,
    pub loot_hidden_count: LOcounter,
    pub shovels: u8,
    pub traps: u8,
}

#[generate_trait]
pub impl LootTrackerEntityStoreImpl of LootTrackerEntityStore {
    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> LootTrackerEntity {
        LootTrackerModelEntityImpl::get(world, entity_id)
    }


    fn get_loot_ids(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> Array<u8> {
        let mut values = dojo::model::ModelEntity::<
            LootTrackerEntity
        >::get_member(
            world,
            entity_id,
            258586962301152085809869000061689983348862767961447622993907670218484461853
        );
        let field_value = core::serde::Serde::<Array<u8>>::deserialize(ref values);

        if core::option::OptionTrait::<Array<u8>>::is_none(@field_value) {
            panic!("Field `LootTracker::loot_ids`: deserialization failed.");
        }

        core::option::OptionTrait::<Array<u8>>::unwrap(field_value)
    }

    fn set_loot_ids(
        self: @LootTrackerEntity, world: dojo::world::IWorldDispatcher, value: Array<u8>
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                258586962301152085809869000061689983348862767961447622993907670218484461853,
                serialized.span()
            );
    }

    fn get_loot_count(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> LOcounter {
        let mut values = dojo::model::ModelEntity::<
            LootTrackerEntity
        >::get_member(
            world,
            entity_id,
            670297249349482973289422853708617522317650136682930507334393558818801459076
        );
        let field_value = core::serde::Serde::<LOcounter>::deserialize(ref values);

        if core::option::OptionTrait::<LOcounter>::is_none(@field_value) {
            panic!("Field `LootTracker::loot_count`: deserialization failed.");
        }

        core::option::OptionTrait::<LOcounter>::unwrap(field_value)
    }

    fn set_loot_count(
        self: @LootTrackerEntity, world: dojo::world::IWorldDispatcher, value: LOcounter
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                670297249349482973289422853708617522317650136682930507334393558818801459076,
                serialized.span()
            );
    }

    fn get_loot_hidden_count(
        world: dojo::world::IWorldDispatcher, entity_id: felt252
    ) -> LOcounter {
        let mut values = dojo::model::ModelEntity::<
            LootTrackerEntity
        >::get_member(
            world,
            entity_id,
            528995930834704123929827168397826098622129123381459310688623742368678438694
        );
        let field_value = core::serde::Serde::<LOcounter>::deserialize(ref values);

        if core::option::OptionTrait::<LOcounter>::is_none(@field_value) {
            panic!("Field `LootTracker::loot_hidden_count`: deserialization failed.");
        }

        core::option::OptionTrait::<LOcounter>::unwrap(field_value)
    }

    fn set_loot_hidden_count(
        self: @LootTrackerEntity, world: dojo::world::IWorldDispatcher, value: LOcounter
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                528995930834704123929827168397826098622129123381459310688623742368678438694,
                serialized.span()
            );
    }

    fn get_shovels(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootTrackerEntity
        >::get_member(
            world,
            entity_id,
            299960375717568744758137858487636614582198958944961298515835616687436813676
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `LootTracker::shovels`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_shovels(self: @LootTrackerEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                299960375717568744758137858487636614582198958944961298515835616687436813676,
                serialized.span()
            );
    }

    fn get_traps(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootTrackerEntity
        >::get_member(
            world,
            entity_id,
            92086068644629347411958562988333133643492157048370128101644191777840845919
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `LootTracker::traps`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_traps(self: @LootTrackerEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                92086068644629347411958562988333133643492157048370128101644191777840845919,
                serialized.span()
            );
    }
}

#[generate_trait]
pub impl LootTrackerStoreImpl of LootTrackerStore {
    fn entity_id_from_keys(game_id: u128, player_id: ContractAddress) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        core::poseidon::poseidon_hash_span(serialized.span())
    }

    fn from_values(ref keys: Span<felt252>, ref values: Span<felt252>) -> LootTracker {
        let mut serialized = core::array::ArrayTrait::new();
        serialized.append_span(keys);
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity = core::serde::Serde::<LootTracker>::deserialize(ref serialized);

        if core::option::OptionTrait::<LootTracker>::is_none(@entity) {
            panic!(
                "Model `LootTracker`: deserialization failed. Ensure the length of the keys tuple is matching the number of #[key] fields in the model struct."
            );
        }

        core::option::OptionTrait::<LootTracker>::unwrap(entity)
    }

    fn get(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> LootTracker {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        dojo::model::Model::<LootTracker>::get(world, serialized.span())
    }


    fn get_loot_ids(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> Array<u8> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootTracker
        >::get_member(
            world,
            serialized.span(),
            258586962301152085809869000061689983348862767961447622993907670218484461853
        );

        let field_value = core::serde::Serde::<Array<u8>>::deserialize(ref values);

        if core::option::OptionTrait::<Array<u8>>::is_none(@field_value) {
            panic!("Field `LootTracker::loot_ids`: deserialization failed.");
        }

        core::option::OptionTrait::<Array<u8>>::unwrap(field_value)
    }

    fn set_loot_ids(self: @LootTracker, world: dojo::world::IWorldDispatcher, value: Array<u8>) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                258586962301152085809869000061689983348862767961447622993907670218484461853,
                serialized.span()
            );
    }

    fn get_loot_count(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> LOcounter {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootTracker
        >::get_member(
            world,
            serialized.span(),
            670297249349482973289422853708617522317650136682930507334393558818801459076
        );

        let field_value = core::serde::Serde::<LOcounter>::deserialize(ref values);

        if core::option::OptionTrait::<LOcounter>::is_none(@field_value) {
            panic!("Field `LootTracker::loot_count`: deserialization failed.");
        }

        core::option::OptionTrait::<LOcounter>::unwrap(field_value)
    }

    fn set_loot_count(self: @LootTracker, world: dojo::world::IWorldDispatcher, value: LOcounter) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                670297249349482973289422853708617522317650136682930507334393558818801459076,
                serialized.span()
            );
    }

    fn get_loot_hidden_count(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> LOcounter {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootTracker
        >::get_member(
            world,
            serialized.span(),
            528995930834704123929827168397826098622129123381459310688623742368678438694
        );

        let field_value = core::serde::Serde::<LOcounter>::deserialize(ref values);

        if core::option::OptionTrait::<LOcounter>::is_none(@field_value) {
            panic!("Field `LootTracker::loot_hidden_count`: deserialization failed.");
        }

        core::option::OptionTrait::<LOcounter>::unwrap(field_value)
    }

    fn set_loot_hidden_count(
        self: @LootTracker, world: dojo::world::IWorldDispatcher, value: LOcounter
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                528995930834704123929827168397826098622129123381459310688623742368678438694,
                serialized.span()
            );
    }

    fn get_shovels(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootTracker
        >::get_member(
            world,
            serialized.span(),
            299960375717568744758137858487636614582198958944961298515835616687436813676
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `LootTracker::shovels`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_shovels(self: @LootTracker, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                299960375717568744758137858487636614582198958944961298515835616687436813676,
                serialized.span()
            );
    }

    fn get_traps(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            LootTracker
        >::get_member(
            world,
            serialized.span(),
            92086068644629347411958562988333133643492157048370128101644191777840845919
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `LootTracker::traps`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_traps(self: @LootTracker, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                92086068644629347411958562988333133643492157048370128101644191777840845919,
                serialized.span()
            );
    }
}

pub impl LootTrackerModelEntityImpl of dojo::model::ModelEntity<LootTrackerEntity> {
    fn id(self: @LootTrackerEntity) -> felt252 {
        *self.__id
    }

    fn values(self: @LootTrackerEntity) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.loot_ids, ref serialized);
        core::serde::Serde::serialize(self.loot_count, ref serialized);
        core::serde::Serde::serialize(self.loot_hidden_count, ref serialized);
        core::serde::Serde::serialize(self.shovels, ref serialized);
        core::serde::Serde::serialize(self.traps, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    fn from_values(entity_id: felt252, ref values: Span<felt252>) -> LootTrackerEntity {
        let mut serialized = array![entity_id];
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity_values = core::serde::Serde::<LootTrackerEntity>::deserialize(ref serialized);
        if core::option::OptionTrait::<LootTrackerEntity>::is_none(@entity_values) {
            panic!("ModelEntity `LootTrackerEntity`: deserialization failed.");
        }
        core::option::OptionTrait::<LootTrackerEntity>::unwrap(entity_values)
    }

    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> LootTrackerEntity {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world,
            dojo::model::Model::<LootTracker>::selector(),
            dojo::model::ModelIndex::Id(entity_id),
            dojo::model::Model::<LootTracker>::layout()
        );
        Self::from_values(entity_id, ref values)
    }

    fn update(self: @LootTrackerEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            dojo::model::Model::<LootTracker>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            self.values(),
            dojo::model::Model::<LootTracker>::layout()
        );
    }

    fn delete(self: @LootTrackerEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world,
            dojo::model::Model::<LootTracker>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            dojo::model::Model::<LootTracker>::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, entity_id: felt252, member_id: felt252,
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<LootTracker>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    dojo::model::Model::<LootTracker>::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @LootTrackerEntity,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>,
    ) {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<LootTracker>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    dojo::model::Model::<LootTracker>::selector(),
                    dojo::model::ModelIndex::MemberId((self.id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }
}

pub impl LootTrackerModelImpl of dojo::model::Model<LootTracker> {
    fn get(world: dojo::world::IWorldDispatcher, keys: Span<felt252>) -> LootTracker {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(keys), Self::layout()
        );
        let mut _keys = keys;

        LootTrackerStore::from_values(ref _keys, ref values)
    }

    fn set(self: @LootTracker, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            Self::selector(),
            dojo::model::ModelIndex::Keys(Self::keys(self)),
            Self::values(self),
            Self::layout()
        );
    }

    fn delete(self: @LootTracker, world: dojo::world::IWorldDispatcher) {
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
        self: @LootTracker,
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
        "LootTracker"
    }

    #[inline(always)]
    fn namespace() -> ByteArray {
        "tisland"
    }

    #[inline(always)]
    fn tag() -> ByteArray {
        "tisland-LootTracker"
    }

    #[inline(always)]
    fn version() -> u8 {
        1
    }

    #[inline(always)]
    fn selector() -> felt252 {
        2389235300317107391623978497196425891168952127185728718139303692028005320820
    }

    #[inline(always)]
    fn instance_selector(self: @LootTracker) -> felt252 {
        Self::selector()
    }

    #[inline(always)]
    fn name_hash() -> felt252 {
        3147366738425661814837869574957972951037433750268301731115998637895582288052
    }

    #[inline(always)]
    fn namespace_hash() -> felt252 {
        785100407485574687708722636754133465572252000084726510320129847110016753675
    }

    #[inline(always)]
    fn entity_id(self: @LootTracker) -> felt252 {
        core::poseidon::poseidon_hash_span(self.keys())
    }

    #[inline(always)]
    fn keys(self: @LootTracker) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.game_id, ref serialized);
        core::serde::Serde::serialize(self.player_id, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn values(self: @LootTracker) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.loot_ids, ref serialized);
        core::serde::Serde::serialize(self.loot_count, ref serialized);
        core::serde::Serde::serialize(self.loot_hidden_count, ref serialized);
        core::serde::Serde::serialize(self.shovels, ref serialized);
        core::serde::Serde::serialize(self.traps, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn layout() -> dojo::model::Layout {
        dojo::model::introspect::Introspect::<LootTracker>::layout()
    }

    #[inline(always)]
    fn instance_layout(self: @LootTracker) -> dojo::model::Layout {
        Self::layout()
    }

    #[inline(always)]
    fn packed_size() -> Option<usize> {
        dojo::model::layout::compute_packed_size(Self::layout())
    }
}

#[starknet::interface]
pub trait Iloot_tracker<T> {
    fn ensure_abi(self: @T, model: LootTracker);
}

#[starknet::contract]
pub mod loot_tracker {
    use super::LootTracker;
    use super::Iloot_tracker;

    #[storage]
    struct Storage {}

    #[abi(embed_v0)]
    impl DojoModelImpl of dojo::model::IModel<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            dojo::model::Model::<LootTracker>::name()
        }

        fn namespace(self: @ContractState) -> ByteArray {
            dojo::model::Model::<LootTracker>::namespace()
        }

        fn tag(self: @ContractState) -> ByteArray {
            dojo::model::Model::<LootTracker>::tag()
        }

        fn version(self: @ContractState) -> u8 {
            dojo::model::Model::<LootTracker>::version()
        }

        fn selector(self: @ContractState) -> felt252 {
            dojo::model::Model::<LootTracker>::selector()
        }

        fn name_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<LootTracker>::name_hash()
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<LootTracker>::namespace_hash()
        }

        fn unpacked_size(self: @ContractState) -> Option<usize> {
            dojo::model::introspect::Introspect::<LootTracker>::size()
        }

        fn packed_size(self: @ContractState) -> Option<usize> {
            dojo::model::Model::<LootTracker>::packed_size()
        }

        fn layout(self: @ContractState) -> dojo::model::Layout {
            dojo::model::Model::<LootTracker>::layout()
        }

        fn schema(self: @ContractState) -> dojo::model::introspect::Ty {
            dojo::model::introspect::Introspect::<LootTracker>::ty()
        }
    }

    #[abi(embed_v0)]
    impl loot_trackerImpl of Iloot_tracker<ContractState> {
        fn ensure_abi(self: @ContractState, model: LootTracker) {}
    }
}
