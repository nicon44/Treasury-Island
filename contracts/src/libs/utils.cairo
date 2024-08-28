use core::option::OptionTrait;
use zeroable::Zeroable;
use traits::{Into, TryInto};
use starknet::{ContractAddress};

use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};



#[inline(always)]
fn ZERO() -> ContractAddress {
    (starknet::contract_address_const::<0x0>())
}

#[inline(always)]
fn WORLD(_world: IWorldDispatcher) {}

#[inline(always)]
fn CONSUME_BYTE_ARRAY(_value: @ByteArray) {}

