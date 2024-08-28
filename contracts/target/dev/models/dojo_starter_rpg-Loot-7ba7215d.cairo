impl LootIntrospect<> of dojo::model::introspect::Introspect<Loot<>> {
    #[inline(always)]
    fn size() -> Option<usize> {
        Option::Some(24)
    }

    fn layout() -> dojo::model::Layout {
        dojo::model::Layout::Struct(
            array![
                dojo::model::FieldLayout {
                    selector: 94214949261868450883426711774081124545524045950286980460520534170009991887,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 72635691727333134482170250869812226495488251264393386993505485232371258410,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1241956440717414649401821087157712792065902120844136661833000338960453963180,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1215051644599031876152661155509417220064644334461933914042442614850356355868,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1567525251407046718472255980249839426526033589088690371319080455922043564085,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 508869907409225205657141587932599779692464511436432376599984136755214266112,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1542334491706109965457306605091184430293079106240188404724776938454977393766,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 462373824500195455151217853215504093056414164642359579663968159675119102415,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1699504712446860833151138169531754219003802319106957913546994905029963165270,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1774609674933824975737299797650868345968876920242084082710411862950749915767,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1568100635420892625751467931531528259864226634936345896694124495778964604767,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 429854607094030504161210740109522149684606897187514324539850993772614590916,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1061502024193105542696256637218978611635085533560524159115090264484481041382,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1437642700260738708390209127883544418098894618347810519549174890422683144000,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1678004907679037917753053864647393318595723402153291941882242564514618940265,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1789673032247813205688392244992803083149272860128579868248498155583694145632,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1219960755367226214820432752403687345339141491143417130438263053262714386369,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 655548256510042807986373163960320809428861697319320373017922695707327387005,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 181491319371800474908717762454676992092431522732117961365770681091549925960,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1275048394100875764645852527066339812319082597708211412487916576979707047252,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 370705359371798132143448914155792234326585579857066310886303662661585769455,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
                },
                dojo::model::FieldLayout {
                    selector: 1664315361452064597203378813480756589962388990467214693372844630478982945892,
                    layout: dojo::model::introspect::Introspect::<u8>::layout()
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
                name: 'Loot',
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
                        name: 'four_one',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'four_one_hidden',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'four_long_x0_a',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'four_long_x1_a',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'four_long_y0_a',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'four_long_y1_a',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'four_long_x0_b',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'four_long_x1_b',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'four_long_y0_b',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'four_long_y1_b',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_one',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_one_hidden',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_long_x0_a',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_long_x1_a',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_long_y0_a',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_long_y1_a',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_long_x0_b',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_long_x1_b',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_long_y0_b',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'three_long_y1_b',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'one_one',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
                    },
                    dojo::model::introspect::Member {
                        name: 'one_one_hidden',
                        attrs: array![].span(),
                        ty: dojo::model::introspect::Introspect::<u8>::ty()
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
pub struct LootEntity {
    __id: felt252, // private field
    pub four_one: u8,
    pub four_one_hidden: u8,
    pub four_long_x0_a: u8,
    pub four_long_x1_a: u8,
    pub four_long_y0_a: u8,
    pub four_long_y1_a: u8,
    pub four_long_x0_b: u8,
    pub four_long_x1_b: u8,
    pub four_long_y0_b: u8,
    pub four_long_y1_b: u8,
    pub three_one: u8,
    pub three_one_hidden: u8,
    pub three_long_x0_a: u8,
    pub three_long_x1_a: u8,
    pub three_long_y0_a: u8,
    pub three_long_y1_a: u8,
    pub three_long_x0_b: u8,
    pub three_long_x1_b: u8,
    pub three_long_y0_b: u8,
    pub three_long_y1_b: u8,
    pub one_one: u8,
    pub one_one_hidden: u8,
    pub shovels: u8,
    pub traps: u8,
}

#[generate_trait]
pub impl LootEntityStoreImpl of LootEntityStore {
    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> LootEntity {
        LootModelEntityImpl::get(world, entity_id)
    }


    fn get_four_one(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            94214949261868450883426711774081124545524045950286980460520534170009991887
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_one`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_one(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                94214949261868450883426711774081124545524045950286980460520534170009991887,
                serialized.span()
            );
    }

    fn get_four_one_hidden(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            72635691727333134482170250869812226495488251264393386993505485232371258410
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_one_hidden`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_one_hidden(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                72635691727333134482170250869812226495488251264393386993505485232371258410,
                serialized.span()
            );
    }

    fn get_four_long_x0_a(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1241956440717414649401821087157712792065902120844136661833000338960453963180
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_x0_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_x0_a(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1241956440717414649401821087157712792065902120844136661833000338960453963180,
                serialized.span()
            );
    }

    fn get_four_long_x1_a(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1215051644599031876152661155509417220064644334461933914042442614850356355868
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_x1_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_x1_a(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1215051644599031876152661155509417220064644334461933914042442614850356355868,
                serialized.span()
            );
    }

    fn get_four_long_y0_a(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1567525251407046718472255980249839426526033589088690371319080455922043564085
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_y0_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_y0_a(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1567525251407046718472255980249839426526033589088690371319080455922043564085,
                serialized.span()
            );
    }

    fn get_four_long_y1_a(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            508869907409225205657141587932599779692464511436432376599984136755214266112
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_y1_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_y1_a(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                508869907409225205657141587932599779692464511436432376599984136755214266112,
                serialized.span()
            );
    }

    fn get_four_long_x0_b(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1542334491706109965457306605091184430293079106240188404724776938454977393766
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_x0_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_x0_b(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1542334491706109965457306605091184430293079106240188404724776938454977393766,
                serialized.span()
            );
    }

    fn get_four_long_x1_b(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            462373824500195455151217853215504093056414164642359579663968159675119102415
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_x1_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_x1_b(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                462373824500195455151217853215504093056414164642359579663968159675119102415,
                serialized.span()
            );
    }

    fn get_four_long_y0_b(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1699504712446860833151138169531754219003802319106957913546994905029963165270
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_y0_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_y0_b(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1699504712446860833151138169531754219003802319106957913546994905029963165270,
                serialized.span()
            );
    }

    fn get_four_long_y1_b(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1774609674933824975737299797650868345968876920242084082710411862950749915767
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_y1_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_y1_b(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1774609674933824975737299797650868345968876920242084082710411862950749915767,
                serialized.span()
            );
    }

    fn get_three_one(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1568100635420892625751467931531528259864226634936345896694124495778964604767
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_one`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_one(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1568100635420892625751467931531528259864226634936345896694124495778964604767,
                serialized.span()
            );
    }

    fn get_three_one_hidden(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            429854607094030504161210740109522149684606897187514324539850993772614590916
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_one_hidden`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_one_hidden(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                429854607094030504161210740109522149684606897187514324539850993772614590916,
                serialized.span()
            );
    }

    fn get_three_long_x0_a(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1061502024193105542696256637218978611635085533560524159115090264484481041382
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_x0_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_x0_a(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1061502024193105542696256637218978611635085533560524159115090264484481041382,
                serialized.span()
            );
    }

    fn get_three_long_x1_a(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1437642700260738708390209127883544418098894618347810519549174890422683144000
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_x1_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_x1_a(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1437642700260738708390209127883544418098894618347810519549174890422683144000,
                serialized.span()
            );
    }

    fn get_three_long_y0_a(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1678004907679037917753053864647393318595723402153291941882242564514618940265
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_y0_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_y0_a(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1678004907679037917753053864647393318595723402153291941882242564514618940265,
                serialized.span()
            );
    }

    fn get_three_long_y1_a(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1789673032247813205688392244992803083149272860128579868248498155583694145632
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_y1_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_y1_a(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1789673032247813205688392244992803083149272860128579868248498155583694145632,
                serialized.span()
            );
    }

    fn get_three_long_x0_b(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1219960755367226214820432752403687345339141491143417130438263053262714386369
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_x0_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_x0_b(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1219960755367226214820432752403687345339141491143417130438263053262714386369,
                serialized.span()
            );
    }

    fn get_three_long_x1_b(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            655548256510042807986373163960320809428861697319320373017922695707327387005
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_x1_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_x1_b(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                655548256510042807986373163960320809428861697319320373017922695707327387005,
                serialized.span()
            );
    }

    fn get_three_long_y0_b(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            181491319371800474908717762454676992092431522732117961365770681091549925960
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_y0_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_y0_b(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                181491319371800474908717762454676992092431522732117961365770681091549925960,
                serialized.span()
            );
    }

    fn get_three_long_y1_b(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1275048394100875764645852527066339812319082597708211412487916576979707047252
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_y1_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_y1_b(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1275048394100875764645852527066339812319082597708211412487916576979707047252,
                serialized.span()
            );
    }

    fn get_one_one(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            370705359371798132143448914155792234326585579857066310886303662661585769455
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::one_one`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_one_one(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                370705359371798132143448914155792234326585579857066310886303662661585769455,
                serialized.span()
            );
    }

    fn get_one_one_hidden(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            1664315361452064597203378813480756589962388990467214693372844630478982945892
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::one_one_hidden`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_one_one_hidden(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1664315361452064597203378813480756589962388990467214693372844630478982945892,
                serialized.span()
            );
    }

    fn get_shovels(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> u8 {
        let mut values = dojo::model::ModelEntity::<
            LootEntity
        >::get_member(
            world,
            entity_id,
            299960375717568744758137858487636614582198958944961298515835616687436813676
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::shovels`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_shovels(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
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
            LootEntity
        >::get_member(
            world,
            entity_id,
            92086068644629347411958562988333133643492157048370128101644191777840845919
        );
        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::traps`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_traps(self: @LootEntity, world: dojo::world::IWorldDispatcher, value: u8) {
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
pub impl LootStoreImpl of LootStore {
    fn entity_id_from_keys(game_id: u128, player_id: ContractAddress) -> felt252 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        core::poseidon::poseidon_hash_span(serialized.span())
    }

    fn from_values(ref keys: Span<felt252>, ref values: Span<felt252>) -> Loot {
        let mut serialized = core::array::ArrayTrait::new();
        serialized.append_span(keys);
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity = core::serde::Serde::<Loot>::deserialize(ref serialized);

        if core::option::OptionTrait::<Loot>::is_none(@entity) {
            panic!(
                "Model `Loot`: deserialization failed. Ensure the length of the keys tuple is matching the number of #[key] fields in the model struct."
            );
        }

        core::option::OptionTrait::<Loot>::unwrap(entity)
    }

    fn get(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> Loot {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        dojo::model::Model::<Loot>::get(world, serialized.span())
    }


    fn get_four_one(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            94214949261868450883426711774081124545524045950286980460520534170009991887
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_one`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_one(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                94214949261868450883426711774081124545524045950286980460520534170009991887,
                serialized.span()
            );
    }

    fn get_four_one_hidden(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            72635691727333134482170250869812226495488251264393386993505485232371258410
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_one_hidden`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_one_hidden(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                72635691727333134482170250869812226495488251264393386993505485232371258410,
                serialized.span()
            );
    }

    fn get_four_long_x0_a(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1241956440717414649401821087157712792065902120844136661833000338960453963180
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_x0_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_x0_a(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1241956440717414649401821087157712792065902120844136661833000338960453963180,
                serialized.span()
            );
    }

    fn get_four_long_x1_a(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1215051644599031876152661155509417220064644334461933914042442614850356355868
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_x1_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_x1_a(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1215051644599031876152661155509417220064644334461933914042442614850356355868,
                serialized.span()
            );
    }

    fn get_four_long_y0_a(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1567525251407046718472255980249839426526033589088690371319080455922043564085
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_y0_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_y0_a(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1567525251407046718472255980249839426526033589088690371319080455922043564085,
                serialized.span()
            );
    }

    fn get_four_long_y1_a(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            508869907409225205657141587932599779692464511436432376599984136755214266112
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_y1_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_y1_a(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                508869907409225205657141587932599779692464511436432376599984136755214266112,
                serialized.span()
            );
    }

    fn get_four_long_x0_b(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1542334491706109965457306605091184430293079106240188404724776938454977393766
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_x0_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_x0_b(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1542334491706109965457306605091184430293079106240188404724776938454977393766,
                serialized.span()
            );
    }

    fn get_four_long_x1_b(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            462373824500195455151217853215504093056414164642359579663968159675119102415
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_x1_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_x1_b(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                462373824500195455151217853215504093056414164642359579663968159675119102415,
                serialized.span()
            );
    }

    fn get_four_long_y0_b(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1699504712446860833151138169531754219003802319106957913546994905029963165270
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_y0_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_y0_b(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1699504712446860833151138169531754219003802319106957913546994905029963165270,
                serialized.span()
            );
    }

    fn get_four_long_y1_b(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1774609674933824975737299797650868345968876920242084082710411862950749915767
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::four_long_y1_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_four_long_y1_b(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1774609674933824975737299797650868345968876920242084082710411862950749915767,
                serialized.span()
            );
    }

    fn get_three_one(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1568100635420892625751467931531528259864226634936345896694124495778964604767
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_one`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_one(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1568100635420892625751467931531528259864226634936345896694124495778964604767,
                serialized.span()
            );
    }

    fn get_three_one_hidden(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            429854607094030504161210740109522149684606897187514324539850993772614590916
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_one_hidden`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_one_hidden(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                429854607094030504161210740109522149684606897187514324539850993772614590916,
                serialized.span()
            );
    }

    fn get_three_long_x0_a(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1061502024193105542696256637218978611635085533560524159115090264484481041382
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_x0_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_x0_a(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1061502024193105542696256637218978611635085533560524159115090264484481041382,
                serialized.span()
            );
    }

    fn get_three_long_x1_a(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1437642700260738708390209127883544418098894618347810519549174890422683144000
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_x1_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_x1_a(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1437642700260738708390209127883544418098894618347810519549174890422683144000,
                serialized.span()
            );
    }

    fn get_three_long_y0_a(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1678004907679037917753053864647393318595723402153291941882242564514618940265
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_y0_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_y0_a(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1678004907679037917753053864647393318595723402153291941882242564514618940265,
                serialized.span()
            );
    }

    fn get_three_long_y1_a(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1789673032247813205688392244992803083149272860128579868248498155583694145632
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_y1_a`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_y1_a(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1789673032247813205688392244992803083149272860128579868248498155583694145632,
                serialized.span()
            );
    }

    fn get_three_long_x0_b(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1219960755367226214820432752403687345339141491143417130438263053262714386369
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_x0_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_x0_b(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1219960755367226214820432752403687345339141491143417130438263053262714386369,
                serialized.span()
            );
    }

    fn get_three_long_x1_b(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            655548256510042807986373163960320809428861697319320373017922695707327387005
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_x1_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_x1_b(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                655548256510042807986373163960320809428861697319320373017922695707327387005,
                serialized.span()
            );
    }

    fn get_three_long_y0_b(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            181491319371800474908717762454676992092431522732117961365770681091549925960
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_y0_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_y0_b(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                181491319371800474908717762454676992092431522732117961365770681091549925960,
                serialized.span()
            );
    }

    fn get_three_long_y1_b(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1275048394100875764645852527066339812319082597708211412487916576979707047252
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::three_long_y1_b`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_three_long_y1_b(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1275048394100875764645852527066339812319082597708211412487916576979707047252,
                serialized.span()
            );
    }

    fn get_one_one(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            370705359371798132143448914155792234326585579857066310886303662661585769455
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::one_one`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_one_one(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                370705359371798132143448914155792234326585579857066310886303662661585769455,
                serialized.span()
            );
    }

    fn get_one_one_hidden(
        world: dojo::world::IWorldDispatcher, game_id: u128, player_id: ContractAddress
    ) -> u8 {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@game_id, ref serialized);
        core::serde::Serde::serialize(@player_id, ref serialized);

        let mut values = dojo::model::Model::<
            Loot
        >::get_member(
            world,
            serialized.span(),
            1664315361452064597203378813480756589962388990467214693372844630478982945892
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::one_one_hidden`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_one_one_hidden(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(@value, ref serialized);

        self
            .set_member(
                world,
                1664315361452064597203378813480756589962388990467214693372844630478982945892,
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
            Loot
        >::get_member(
            world,
            serialized.span(),
            299960375717568744758137858487636614582198958944961298515835616687436813676
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::shovels`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_shovels(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
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
            Loot
        >::get_member(
            world,
            serialized.span(),
            92086068644629347411958562988333133643492157048370128101644191777840845919
        );

        let field_value = core::serde::Serde::<u8>::deserialize(ref values);

        if core::option::OptionTrait::<u8>::is_none(@field_value) {
            panic!("Field `Loot::traps`: deserialization failed.");
        }

        core::option::OptionTrait::<u8>::unwrap(field_value)
    }

    fn set_traps(self: @Loot, world: dojo::world::IWorldDispatcher, value: u8) {
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

pub impl LootModelEntityImpl of dojo::model::ModelEntity<LootEntity> {
    fn id(self: @LootEntity) -> felt252 {
        *self.__id
    }

    fn values(self: @LootEntity) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.four_one, ref serialized);
        core::serde::Serde::serialize(self.four_one_hidden, ref serialized);
        core::serde::Serde::serialize(self.four_long_x0_a, ref serialized);
        core::serde::Serde::serialize(self.four_long_x1_a, ref serialized);
        core::serde::Serde::serialize(self.four_long_y0_a, ref serialized);
        core::serde::Serde::serialize(self.four_long_y1_a, ref serialized);
        core::serde::Serde::serialize(self.four_long_x0_b, ref serialized);
        core::serde::Serde::serialize(self.four_long_x1_b, ref serialized);
        core::serde::Serde::serialize(self.four_long_y0_b, ref serialized);
        core::serde::Serde::serialize(self.four_long_y1_b, ref serialized);
        core::serde::Serde::serialize(self.three_one, ref serialized);
        core::serde::Serde::serialize(self.three_one_hidden, ref serialized);
        core::serde::Serde::serialize(self.three_long_x0_a, ref serialized);
        core::serde::Serde::serialize(self.three_long_x1_a, ref serialized);
        core::serde::Serde::serialize(self.three_long_y0_a, ref serialized);
        core::serde::Serde::serialize(self.three_long_y1_a, ref serialized);
        core::serde::Serde::serialize(self.three_long_x0_b, ref serialized);
        core::serde::Serde::serialize(self.three_long_x1_b, ref serialized);
        core::serde::Serde::serialize(self.three_long_y0_b, ref serialized);
        core::serde::Serde::serialize(self.three_long_y1_b, ref serialized);
        core::serde::Serde::serialize(self.one_one, ref serialized);
        core::serde::Serde::serialize(self.one_one_hidden, ref serialized);
        core::serde::Serde::serialize(self.shovels, ref serialized);
        core::serde::Serde::serialize(self.traps, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    fn from_values(entity_id: felt252, ref values: Span<felt252>) -> LootEntity {
        let mut serialized = array![entity_id];
        serialized.append_span(values);
        let mut serialized = core::array::ArrayTrait::span(@serialized);

        let entity_values = core::serde::Serde::<LootEntity>::deserialize(ref serialized);
        if core::option::OptionTrait::<LootEntity>::is_none(@entity_values) {
            panic!("ModelEntity `LootEntity`: deserialization failed.");
        }
        core::option::OptionTrait::<LootEntity>::unwrap(entity_values)
    }

    fn get(world: dojo::world::IWorldDispatcher, entity_id: felt252) -> LootEntity {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world,
            dojo::model::Model::<Loot>::selector(),
            dojo::model::ModelIndex::Id(entity_id),
            dojo::model::Model::<Loot>::layout()
        );
        Self::from_values(entity_id, ref values)
    }

    fn update(self: @LootEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            dojo::model::Model::<Loot>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            self.values(),
            dojo::model::Model::<Loot>::layout()
        );
    }

    fn delete(self: @LootEntity, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::delete_entity(
            world,
            dojo::model::Model::<Loot>::selector(),
            dojo::model::ModelIndex::Id(self.id()),
            dojo::model::Model::<Loot>::layout()
        );
    }

    fn get_member(
        world: dojo::world::IWorldDispatcher, entity_id: felt252, member_id: felt252,
    ) -> Span<felt252> {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<Loot>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::entity(
                    world,
                    dojo::model::Model::<Loot>::selector(),
                    dojo::model::ModelIndex::MemberId((entity_id, member_id)),
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }

    fn set_member(
        self: @LootEntity,
        world: dojo::world::IWorldDispatcher,
        member_id: felt252,
        values: Span<felt252>,
    ) {
        match dojo::utils::find_model_field_layout(
            dojo::model::Model::<Loot>::layout(), member_id
        ) {
            Option::Some(field_layout) => {
                dojo::world::IWorldDispatcherTrait::set_entity(
                    world,
                    dojo::model::Model::<Loot>::selector(),
                    dojo::model::ModelIndex::MemberId((self.id(), member_id)),
                    values,
                    field_layout
                )
            },
            Option::None => core::panic_with_felt252('bad member id')
        }
    }
}

pub impl LootModelImpl of dojo::model::Model<Loot> {
    fn get(world: dojo::world::IWorldDispatcher, keys: Span<felt252>) -> Loot {
        let mut values = dojo::world::IWorldDispatcherTrait::entity(
            world, Self::selector(), dojo::model::ModelIndex::Keys(keys), Self::layout()
        );
        let mut _keys = keys;

        LootStore::from_values(ref _keys, ref values)
    }

    fn set(self: @Loot, world: dojo::world::IWorldDispatcher) {
        dojo::world::IWorldDispatcherTrait::set_entity(
            world,
            Self::selector(),
            dojo::model::ModelIndex::Keys(Self::keys(self)),
            Self::values(self),
            Self::layout()
        );
    }

    fn delete(self: @Loot, world: dojo::world::IWorldDispatcher) {
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
        self: @Loot, world: dojo::world::IWorldDispatcher, member_id: felt252, values: Span<felt252>
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
        "Loot"
    }

    #[inline(always)]
    fn namespace() -> ByteArray {
        "dojo_starter_rpg"
    }

    #[inline(always)]
    fn tag() -> ByteArray {
        "dojo_starter_rpg-Loot"
    }

    #[inline(always)]
    fn version() -> u8 {
        1
    }

    #[inline(always)]
    fn selector() -> felt252 {
        3495610882279210057770669429343914255963377977657372782992025060488183573826
    }

    #[inline(always)]
    fn instance_selector(self: @Loot) -> felt252 {
        Self::selector()
    }

    #[inline(always)]
    fn name_hash() -> felt252 {
        1446971743666024965202193487612300890800141259028398483890442550865087200779
    }

    #[inline(always)]
    fn namespace_hash() -> felt252 {
        478818318480335965857378696073169770196363091739687234837836645523859370417
    }

    #[inline(always)]
    fn entity_id(self: @Loot) -> felt252 {
        core::poseidon::poseidon_hash_span(self.keys())
    }

    #[inline(always)]
    fn keys(self: @Loot) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.game_id, ref serialized);
        core::serde::Serde::serialize(self.player_id, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn values(self: @Loot) -> Span<felt252> {
        let mut serialized = core::array::ArrayTrait::new();
        core::serde::Serde::serialize(self.four_one, ref serialized);
        core::serde::Serde::serialize(self.four_one_hidden, ref serialized);
        core::serde::Serde::serialize(self.four_long_x0_a, ref serialized);
        core::serde::Serde::serialize(self.four_long_x1_a, ref serialized);
        core::serde::Serde::serialize(self.four_long_y0_a, ref serialized);
        core::serde::Serde::serialize(self.four_long_y1_a, ref serialized);
        core::serde::Serde::serialize(self.four_long_x0_b, ref serialized);
        core::serde::Serde::serialize(self.four_long_x1_b, ref serialized);
        core::serde::Serde::serialize(self.four_long_y0_b, ref serialized);
        core::serde::Serde::serialize(self.four_long_y1_b, ref serialized);
        core::serde::Serde::serialize(self.three_one, ref serialized);
        core::serde::Serde::serialize(self.three_one_hidden, ref serialized);
        core::serde::Serde::serialize(self.three_long_x0_a, ref serialized);
        core::serde::Serde::serialize(self.three_long_x1_a, ref serialized);
        core::serde::Serde::serialize(self.three_long_y0_a, ref serialized);
        core::serde::Serde::serialize(self.three_long_y1_a, ref serialized);
        core::serde::Serde::serialize(self.three_long_x0_b, ref serialized);
        core::serde::Serde::serialize(self.three_long_x1_b, ref serialized);
        core::serde::Serde::serialize(self.three_long_y0_b, ref serialized);
        core::serde::Serde::serialize(self.three_long_y1_b, ref serialized);
        core::serde::Serde::serialize(self.one_one, ref serialized);
        core::serde::Serde::serialize(self.one_one_hidden, ref serialized);
        core::serde::Serde::serialize(self.shovels, ref serialized);
        core::serde::Serde::serialize(self.traps, ref serialized);

        core::array::ArrayTrait::span(@serialized)
    }

    #[inline(always)]
    fn layout() -> dojo::model::Layout {
        dojo::model::introspect::Introspect::<Loot>::layout()
    }

    #[inline(always)]
    fn instance_layout(self: @Loot) -> dojo::model::Layout {
        Self::layout()
    }

    #[inline(always)]
    fn packed_size() -> Option<usize> {
        dojo::model::layout::compute_packed_size(Self::layout())
    }
}

#[starknet::interface]
pub trait Iloot<T> {
    fn ensure_abi(self: @T, model: Loot);
}

#[starknet::contract]
pub mod loot {
    use super::Loot;
    use super::Iloot;

    #[storage]
    struct Storage {}

    #[abi(embed_v0)]
    impl DojoModelImpl of dojo::model::IModel<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Loot>::name()
        }

        fn namespace(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Loot>::namespace()
        }

        fn tag(self: @ContractState) -> ByteArray {
            dojo::model::Model::<Loot>::tag()
        }

        fn version(self: @ContractState) -> u8 {
            dojo::model::Model::<Loot>::version()
        }

        fn selector(self: @ContractState) -> felt252 {
            dojo::model::Model::<Loot>::selector()
        }

        fn name_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<Loot>::name_hash()
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            dojo::model::Model::<Loot>::namespace_hash()
        }

        fn unpacked_size(self: @ContractState) -> Option<usize> {
            dojo::model::introspect::Introspect::<Loot>::size()
        }

        fn packed_size(self: @ContractState) -> Option<usize> {
            dojo::model::Model::<Loot>::packed_size()
        }

        fn layout(self: @ContractState) -> dojo::model::Layout {
            dojo::model::Model::<Loot>::layout()
        }

        fn schema(self: @ContractState) -> dojo::model::introspect::Ty {
            dojo::model::introspect::Introspect::<Loot>::ty()
        }
    }

    #[abi(embed_v0)]
    impl lootImpl of Iloot<ContractState> {
        fn ensure_abi(self: @ContractState, model: Loot) {}
    }
}
