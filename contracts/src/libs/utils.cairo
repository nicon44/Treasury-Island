use core::option::OptionTrait;
use zeroable::Zeroable;
use traits::{Into, TryInto};
use starknet::{ContractAddress};

use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use tisland::constants::{MAX_X, MAX_Y};



#[inline(always)]
fn ZERO() -> ContractAddress {
    (starknet::contract_address_const::<0x0>())
}

#[inline(always)]
fn WORLD(_world: IWorldDispatcher) {}

#[inline(always)]
fn CONSUME_BYTE_ARRAY(_value: @ByteArray) {}

#[inline(always)]
fn XY_TO_INDEX(x: u8, y: u8) -> u8 {
    (x + (y * MAX_X))
}

#[inline(always)]
fn INDEX_TO_XY(index: u8) -> (u8, u8) {
    (index % MAX_X, index / MAX_X)
}

