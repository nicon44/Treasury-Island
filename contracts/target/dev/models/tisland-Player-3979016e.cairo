impl PlayerIntrospect<> of dojo::model::introspect::Introspect<Player<>> {
    #[inline(always)]
    fn size() -> Option<usize> {
        Option::Some(5)
    }

    fn layout() -> dojo::model::Layout {
        dojo::model::Layout::Struct(
            array![
                dojo::model::FieldLayout {
                    selector: 1528802474226268325865027367859591458315299653151958663884057507666229546336,
                    layout: dojo::model::introspect::Introspect::<felt252>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1305751725254977285631546122968161915172163842217299317870374773671824166540,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1242883636335185042648196101482844477055185136100498177742807244790485718414,
                    layout: dojo::model::introspect::Introspect::<u64>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 260543300941786315594203740777186866812756889840785228703984478738967316256,
                    layout: dojo::model::introspect::Introspect::<u256>::layout()
                }
            ]
                .span()
        )
    }

    #[inline(always)]
    fn ty() -> dojo::model::introspect::Ty {
        dojo::model::introspect::Ty::Struct(
            dojo::model::introspect::Struct {
                name: 'Player',
                attrs: array![].span(),
                children: array![
                    dojo::model::introspect::Member {
                        name: 'player_id',
                        attrs: array!['key'].span(),
                        ty: dojo::model::introspect::Introspect::<ContractAddress>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'name',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<felt252>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'pfp_num',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'timestamp',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u64>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'score',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u256>::ty()
                    }
                ]
                    .span()
            }
        )
    }
}

#[derive(Drop, Serde)]
pub struct PlayerEntity {
    __id: felt252, // private field
    pub name: felt252,
    pub pfp_num: u8,
    pub timestamp: u64,
    pub score: u256,
}

#[generate_trait]
pub impl PlayerEntityStoreImpl of PlayerEntityStore {
    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> PlayerEntity {
        PlayerModelEntityImpl::get(world, entity_id)
    }


    fn get_name(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> felt252 {
        let mut values = dojo::model::ModelEntity::<
            PlayerEntity
        >::get_member(
            world,
            entity_id,
            1528802474226268325865027367859591458315299653151958663884057507666229546336
        );
        let field_value = core::serde::Serde::<felt252>::deserialize(ref values);

        if core::option::OptionTrait::<felt252>::is_none(@field_value) {
            panic!("Field `Player::name`: deserialization failed.");
        }

        core::option::OptionTrait::<felt252>::unwrap(field_value)
    }

    fn set_name(self: @PlayerEntity, world: dojo::world::IWorldDispatcher, value: felt252) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1528802474226268325865027367859591458315299653151958663884057507666229546336,
                serialized.span()
            );
    }

    fn get_pfp_num(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            PlayerEntity
        >::get_member(
            world,
            entity_id,
            1305751725254977285631546122968161915172163842217299317870374773671824166540
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Player::pfp_num`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_pfp_num(self: @PlayerEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1305751725254977285631546122968161915172163842217299317870374773671824166540,
                serialized.span()
            );
    }

    fn get_timestamp(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u64 {
        let mut values = dojo::model::ModelEntity::<
            PlayerEntity
        >::get_member(
            world,
            entity_id,
            1242883636335185042648196101482844477055185136100498177742807244790485718414
        );
        let field_value = core::serde::Serde::<u64>::deserialize(ref values);

        if core::option::OptionTrait::<u64>::is_none(@field_value) {
            panic!("Field `Player::timestamp`: deserialization failed.");
        }

        core::option::OptionTrait::<u64>::unwrap(field_value)
    }

    fn set_timestamp(self: @PlayerEntity, world: dojo::world::IWorldDispatcher, value: u64) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1242883636335185042648196101482844477055185136100498177742807244790485718414,
                serialized.span()
            );
    }

    fn get_score(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u256 {
        let mut values = dojo::model::ModelEntity::<
            PlayerEntity
        >::get_member(
            world,
            entity_id,
            260543300941786315594203740777186866812756889840785228703984478738967316256
        );
        let field_value = core::serde::Serde::<u256>::deserialize(ref values);

        if core::option::OptionTrait::<u256>::is_none(@field_value) {
            panic!("Field `Player::score`: deserialization failed.");
        }

        core::option::OptionTrait::<u256>::unwrap(field_value)
    }

    fn set_score(self: @PlayerEntity, world: dojo::world::IWorldDispatcher, value: u256) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                260543300941786315594203740777186866812756889840785228703984478738967316256,
                serialized.span()
            );
    }
}

#[generate_trait]
pub impl PlayerStoreImpl of PlayerStore {
    fn entity_id_from_keys(player_id: ContractAddress) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@player_id, ref serialized);

        core::poseidon::poseidon_hash_span(serialized.span())
    }

    fn from_values(ref keys: Span<felt252>, ref values: Span<felt252>) -> Player {
        let mut serialized = core::array::ArrayTrait::new();
        serialized.append_span(keys);
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity = core::serde::Serde::<Player>::deserialize(ref serialized);

        if core::option::OptionTrait::<Player>::is_none(@entity) {
            panic!(
                "Model `Player`: deserialization failed. Ensure the length of the keys tuple is matching the number of #[key] fields in the model struct."
            );
        }

        core::option::OptionTrait::<Player>::unwrap(entity)
    }

    fn get(world: dojo::world::IWorldDispatcher, player_id: ContractAddress) -> Player {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@player_id, ref serialized);

        dojo::model::Model::<Player>::get(world, serialized.span())
    }


    fn get_name(world: dojo::world::IWorldDispatcher, player_id: ContractAddress) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Player
        >::get_member(
            world,
            serialized.span(),
            1528802474226268325865027367859591458315299653151958663884057507666229546336
        );

        let field_value = core::serde::Serde::<felt252>::deserialize(ref values);

        if core::option::OptionTrait::<felt252>::is_none(@field_value) {
            panic!("Field `Player::name`: deserialization failed.");
        }

        core::option::OptionTrait::<felt252>::unwrap(field_value)
    }

    fn set_name(self: @Player, world: dojo::world::IWorldDispatcher, value: felt252) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1528802474226268325865027367859591458315299653151958663884057507666229546336,
                serialized.span()
            );
    }

    fn get_pfp_num(world: dojo::world::IWorldDispatcher, player_id: ContractAddress) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Player
        >::get_member(
            world,
            serialized.span(),
            1305751725254977285631546122968161915172163842217299317870374773671824166540
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Player::pfp_num`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_pfp_num(self: @Player, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1305751725254977285631546122968161915172163842217299317870374773671824166540,
                serialized.span()
            );
    }

    fn get_timestamp(world: dojo::world::IWorldDispatcher, player_id: ContractAddress) -> u64 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Player
        >::get_member(
            world,
            serialized.span(),
            1242883636335185042648196101482844477055185136100498177742807244790485718414
        );

        let field_value = core::serde::Serde::<u64>::deserialize(ref values);

        if core::option::OptionTrait::<u64>::is_none(@field_value) {
            panic!("Field `Player::timestamp`: deserialization failed.");
        }

        core::option::OptionTrait::<u64>::unwrap(field_value)
    }

    fn set_timestamp(self: @Player, world: dojo::world::IWorldDispatcher, value: u64) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1242883636335185042648196101482844477055185136100498177742807244790485718414,
                serialized.span()
            );
    }

    fn get_score(world: dojo::world::IWorldDispatcher, player_id: ContractAddress) -> u256 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Player
        >::get_member(
            world,
            serialized.span(),
            260543300941786315594203740777186866812756889840785228703984478738967316256
        );

        let field_value = core::serde::Serde::<u256>::deserialize(ref values);

        if core::option::OptionTrait::<u256>::is_none(@field_value) {
            panic!("Field `Player::score`: deserialization failed.");
        }

        core::option::OptionTrait::<u256>::unwrap(field_value)
    }

    fn set_score(self: @Player, world: dojo::world::IWorldDispatcher, value: u256) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                260543300941786315594203740777186866812756889840785228703984478738967316256,
                serialized.span()
            );
    }
}

pub impl PlayerModelEntityImpl of dojo::model::ModelEntity<PlayerEntity> {
    fn id(self: @PlayerEntity) -> felt252 {
        *self.__id
    }

    fn values(self: @PlayerEntity) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::array::ArrayTrait::append(ref serialized, *self.name);
        core::serde::Serde::serialize(self.pfp_num, ref serialized);
        core::serde::Serde::serialize(self.timestamp, ref serialized);
        core::serde::Serde::serialize(self.score, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    fn from_values(entity_id: felt252, ref values: Span<felt252>) -> PlayerEntity {
        let mut serialized = array![entity_id];
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity_values = core::serde::Serde::<PlayerEntity>::deserialize(ref serialized);
        if core::option::OptionTrait::<PlayerEntity>::is_none(@entity_values) {
            panic!("ModelEntity `PlayerEntity`: deserialization failed.");
        }
        core::option::OptionTrait::<PlayerEntity>::unwrap(entity_values)
    }

    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> PlayerEntity {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world,
            dojo::model::Model::<Player>::selector(),
            dojo::model::ModelIndex::Id(entity_id),
            dojo::model::Model::<Player>::layout()
        );
        Self::from_values(entity_id, ref values)
    }

    fn update(self: @PlayerEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            dojo::model::Model::<Player>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            self.values(),
            dojo::model::Model::<Player>::layout()
        );
    }

    fn delete(self: @PlayerEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world,
            dojo::model::Model::<Player>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            dojo::model::Model::<Player>::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, entity_id: felt252, member_id: felt252,
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<Player>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    dojo::model::Model::<Player>::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @PlayerEntity,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>,
    ) {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<Player>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    dojo::model::Model::<Player>::selector(),
                    dojo::model::ModelIndex::MemberId((self.id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }
}

pub impl PlayerModelImpl of dojo::model::Model<Player> {
    fn get(world: dojo::world::IWorldDispatcher, keys: Span<felt252>) -> Player {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(keys), Self::layout()
        );
        let mut _keys = keys;

        PlayerStore::from_values(ref _keys, ref values)
    }

    fn set(self: @Player, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            Self::selector(),
            dojo::model::ModelIndex::Keys(Self::keys(self)),
            Self::values(self),
            Self::layout()
        );
    }

    fn delete(self: @Player, world: dojo::world::IWorldDispatcher) {
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
        self: @Player,
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
        "Player"
    }

    #[inline(always)]
    fn namespace() -> ByteArray {
        "tisland"
    }

    #[inline(always)]
    fn tag() -> ByteArray {
        "tisland-Player"
    }

    #[inline(always)]
    fn version() -> u8 {
        1
    }

    #[inline(always)]
    fn selector() -> felt252 {
        1624726921138899962098022608797713867938480936720740886224417615040375804968
    }

    #[inline(always)]
    fn instance_selector(self: @Player) -> felt252 {
        Self::selector()
    }

    #[inline(always)]
    fn name_hash() -> felt252 {
        1073075359926275415180704315933677548333097210683379121732618306925003101845
    }

    #[inline(always)]
    fn namespace_hash() -> felt252 {
        785100407485574687708722636754133465572252000084726510320129847110016753675
    }

    #[inline(always)]
    fn entity_id(self: @Player) -> felt252 {
        core::poseidon::poseidon_hash_span(self.keys())
    }

    #[inline(always)]
    fn keys(self: @Player) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.player_id, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn values(self: @Player) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::array::ArrayTrait::append(ref serialized, *self.name);
        core::serde::Serde::serialize(self.pfp_num, ref serialized);
        core::serde::Serde::serialize(self.timestamp, ref serialized);
        core::serde::Serde::serialize(self.score, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn layout() -> dojo::model::Layout {
        dojo::model::introspect::Introspect::<Player>::layout()
    }

    #[inline(always)]
    fn instance_layout(self: @Player) -> dojo::model::Layout {
        Self::layout()
    }

    #[inline(always)]
    fn packed_size() -> Option<usize> {
        dojo::model::layout::compute_packed_size(Self::layout())
    }
}

#[starknet::interface]
pub trait Iplayer<T> {
    fn ensure_abi(self: @T, model: Player);
}

#[starknet::contract]
pub mod player {
    use super::Player;
    use super::Iplayer;

    #[storage]
    struct Storage {}

    #[abi(embed_v0)]
    impl DojoModelImpl of dojo::model::IModel<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Player>::name()
        }

        fn namespace(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Player>::namespace()
        }

        fn tag(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Player>::tag()
        }

        fn version(self: @ContractState) -> u8 {
            dojo::model::Model::<Player>::version()
        }

        fn selector(self: @ContractState) -> felt252 {
            dojo::model::Model::<Player>::selector()
        }

        fn name_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<Player>::name_hash()
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<Player>::namespace_hash()
        }

        fn unpacked_size(self: @ContractState) -> Option<usize> {
            dojo::model::introspect::Introspect::<Player>::size()
        }

        fn packed_size(self: @ContractState) -> Option<usize> {
            dojo::model::Model::<Player>::packed_size()
        }

        fn layout(self: @ContractState) -> dojo::model::Layout {
            dojo::model::Model::<Player>::layout()
        }

        fn schema(self: @ContractState) -> dojo::model::introspect::Ty {
            dojo::model::introspect::Introspect::<Player>::ty()
        }
    }

    #[abi(embed_v0)]
    impl playerImpl of Iplayer<ContractState> {
        fn ensure_abi(self: @ContractState, model: Player) {}
    }
}
