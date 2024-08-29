impl ArrayTesterIntrospect<> of dojo::model::introspect::Introspect<ArrayTester<>> {
    #[inline(always)]
    fn size() -> Option<usize> {
        Option::None
    }

    fn layout() -> dojo::model::Layout {
        dojo::model::Layout::Struct(
            array![
                dojo::model::FieldLayout {
                    selector: 902460294018325897932085447114571276404752603622455006826277009683094289513,
                    layout: dojo::model::introspect::Introspect::<Array<u8>>::layout()
                }
            ]
                .span()
        )
    }

    #[inline(always)]
    fn ty() -> dojo::model::introspect::Ty {
        dojo::model::introspect::Ty::Struct(
            dojo::model::introspect::Struct {
                name: 'ArrayTester',
                attrs: array![].span(),
                children: array![
                    dojo::model::introspect::Member {
                        name: 'game_id',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<u128>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'mapunits',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Ty::Array(
                            array![dojo::model::introspect::Introspect::<u8>::ty()].span()
                        )
                    }
                ]
                    .span()
            }
        )
    }
}

#[derive(Drop, Serde)]
pub struct ArrayTesterEntity {
    __id: felt252, // private field
    pub mapunits: Array<u8>,
}

#[generate_trait]
pub impl ArrayTesterEntityStoreImpl of ArrayTesterEntityStore {
    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> ArrayTesterEntity {
        ArrayTesterModelEntityImpl::get(world, entity_id)
    }


    fn get_mapunits(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> Array<u8> {
        let mut values = dojo::model::ModelEntity::<
            ArrayTesterEntity
        >::get_member(
            world,
            entity_id,
            902460294018325897932085447114571276404752603622455006826277009683094289513
        );
        let field_value = core::serde::Serde::<Array<u8>>::deserialize(ref values);

        if core::option::OptionTrait::<Array<u8>>::is_none(@field_value) {
            panic!("Field `ArrayTester::mapunits`: deserialization failed.");
        }

        core::option::OptionTrait::<Array<u8>>::unwrap(field_value)
    }

    fn set_mapunits(
        self: @ArrayTesterEntity, world: dojo::world::IWorldDispatcher, value: Array<u8>
    ) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                902460294018325897932085447114571276404752603622455006826277009683094289513,
                serialized.span()
            );
    }
}

#[generate_trait]
pub impl ArrayTesterStoreImpl of ArrayTesterStore {
    fn entity_id_from_keys(game_id: u128) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        core::poseidon::poseidon_hash_span(serialized.span())
    }

    fn from_values(ref keys: Span<felt252>, ref values: Span<felt252>) -> ArrayTester {
        let mut serialized = core::array::ArrayTrait::new();
        serialized.append_span(keys);
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity = core::serde::Serde::<ArrayTester>::deserialize(ref serialized);

        if core::option::OptionTrait::<ArrayTester>::is_none(@entity) {
            panic!(
                "Model `ArrayTester`: deserialization failed. Ensure the length of the keys tuple is matching the number of #[key] fields in the model struct."
            );
        }

        core::option::OptionTrait::<ArrayTester>::unwrap(entity)
    }

    fn get(world: dojo::world::IWorldDispatcher, game_id: u128) -> ArrayTester {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        dojo::model::Model::<ArrayTester>::get(world, serialized.span())
    }


    fn get_mapunits(world: dojo::world::IWorldDispatcher, game_id: u128) -> Array<u8> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);

        let mut values = dojo::model::Model::<
            ArrayTester
        >::get_member(
            world,
            serialized.span(),
            902460294018325897932085447114571276404752603622455006826277009683094289513
        );

        let field_value = core::serde::Serde::<Array<u8>>::deserialize(ref values);

        if core::option::OptionTrait::<Array<u8>>::is_none(@field_value) {
            panic!("Field `ArrayTester::mapunits`: deserialization failed.");
        }

        core::option::OptionTrait::<Array<u8>>::unwrap(field_value)
    }

    fn set_mapunits(self: @ArrayTester, world: dojo::world::IWorldDispatcher, value: Array<u8>) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                902460294018325897932085447114571276404752603622455006826277009683094289513,
                serialized.span()
            );
    }
}

pub impl ArrayTesterModelEntityImpl of dojo::model::ModelEntity<ArrayTesterEntity> {
    fn id(self: @ArrayTesterEntity) -> felt252 {
        *self.__id
    }

    fn values(self: @ArrayTesterEntity) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.mapunits, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    fn from_values(entity_id: felt252, ref values: Span<felt252>) -> ArrayTesterEntity {
        let mut serialized = array![entity_id];
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity_values = core::serde::Serde::<ArrayTesterEntity>::deserialize(ref serialized);
        if core::option::OptionTrait::<ArrayTesterEntity>::is_none(@entity_values) {
            panic!("ModelEntity `ArrayTesterEntity`: deserialization failed.");
        }
        core::option::OptionTrait::<ArrayTesterEntity>::unwrap(entity_values)
    }

    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> ArrayTesterEntity {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world,
            dojo::model::Model::<ArrayTester>::selector(),
            dojo::model::ModelIndex::Id(entity_id),
            dojo::model::Model::<ArrayTester>::layout()
        );
        Self::from_values(entity_id, ref values)
    }

    fn update(self: @ArrayTesterEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            dojo::model::Model::<ArrayTester>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            self.values(),
            dojo::model::Model::<ArrayTester>::layout()
        );
    }

    fn delete(self: @ArrayTesterEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world,
            dojo::model::Model::<ArrayTester>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            dojo::model::Model::<ArrayTester>::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, entity_id: felt252, member_id: felt252,
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<ArrayTester>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    dojo::model::Model::<ArrayTester>::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @ArrayTesterEntity,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>,
    ) {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<ArrayTester>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    dojo::model::Model::<ArrayTester>::selector(),
                    dojo::model::ModelIndex::MemberId((self.id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }
}

pub impl ArrayTesterModelImpl of dojo::model::Model<ArrayTester> {
    fn get(world: dojo::world::IWorldDispatcher, keys: Span<felt252>) -> ArrayTester {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(keys), Self::layout()
        );
        let mut _keys = keys;

        ArrayTesterStore::from_values(ref _keys, ref values)
    }

    fn set(self: @ArrayTester, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            Self::selector(),
            dojo::model::ModelIndex::Keys(Self::keys(self)),
            Self::values(self),
            Self::layout()
        );
    }

    fn delete(self: @ArrayTester, world: dojo::world::IWorldDispatcher) {
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
        self: @ArrayTester,
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
        "ArrayTester"
    }

    #[inline(always)]
    fn namespace() -> ByteArray {
        "tisland"
    }

    #[inline(always)]
    fn tag() -> ByteArray {
        "tisland-ArrayTester"
    }

    #[inline(always)]
    fn version() -> u8 {
        1
    }

    #[inline(always)]
    fn selector() -> felt252 {
        3424696943022492958658316032728544932807755107272959484234140392064356051437
    }

    #[inline(always)]
    fn instance_selector(self: @ArrayTester) -> felt252 {
        Self::selector()
    }

    #[inline(always)]
    fn name_hash() -> felt252 {
        743875961627966666146396573103879637445678176596261514423426517106536392176
    }

    #[inline(always)]
    fn namespace_hash() -> felt252 {
        785100407485574687708722636754133465572252000084726510320129847110016753675
    }

    #[inline(always)]
    fn entity_id(self: @ArrayTester) -> felt252 {
        core::poseidon::poseidon_hash_span(self.keys())
    }

    #[inline(always)]
    fn keys(self: @ArrayTester) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.game_id, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn values(self: @ArrayTester) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.mapunits, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn layout() -> dojo::model::Layout {
        dojo::model::introspect::Introspect::<ArrayTester>::layout()
    }

    #[inline(always)]
    fn instance_layout(self: @ArrayTester) -> dojo::model::Layout {
        Self::layout()
    }

    #[inline(always)]
    fn packed_size() -> Option<usize> {
        dojo::model::layout::compute_packed_size(Self::layout())
    }
}

#[starknet::interface]
pub trait Iarray_tester<T> {
    fn ensure_abi(self: @T, model: ArrayTester);
}

#[starknet::contract]
pub mod array_tester {
    use super::ArrayTester;
    use super::Iarray_tester;

    #[storage]
    struct Storage {}

    #[abi(embed_v0)]
    impl DojoModelImpl of dojo::model::IModel<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            dojo::model::Model::<ArrayTester>::name()
        }

        fn namespace(self: @ContractState) -> ByteArray {
            dojo::model::Model::<ArrayTester>::namespace()
        }

        fn tag(self: @ContractState) -> ByteArray {
            dojo::model::Model::<ArrayTester>::tag()
        }

        fn version(self: @ContractState) -> u8 {
            dojo::model::Model::<ArrayTester>::version()
        }

        fn selector(self: @ContractState) -> felt252 {
            dojo::model::Model::<ArrayTester>::selector()
        }

        fn name_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<ArrayTester>::name_hash()
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<ArrayTester>::namespace_hash()
        }

        fn unpacked_size(self: @ContractState) -> Option<usize> {
            dojo::model::introspect::Introspect::<ArrayTester>::size()
        }

        fn packed_size(self: @ContractState) -> Option<usize> {
            dojo::model::Model::<ArrayTester>::packed_size()
        }

        fn layout(self: @ContractState) -> dojo::model::Layout {
            dojo::model::Model::<ArrayTester>::layout()
        }

        fn schema(self: @ContractState) -> dojo::model::introspect::Ty {
            dojo::model::introspect::Introspect::<ArrayTester>::ty()
        }
    }

    #[abi(embed_v0)]
    impl array_testerImpl of Iarray_tester<ContractState> {
        fn ensure_abi(self: @ContractState, model: ArrayTester) {}
    }
}
