use traits:: Into;
use debug:: PrintTrait;

#[derive(Copy, Drop, Serde, PartialEq, Introspect)]
enum GameRoomState {
    Null,       // 0  
    Awaiting,   // 1
    Withdrawn,  // 2
    Refused,    // 3
    Expired,    // 4
    InProgress, // 5
    Resolved,   // 6
    Draw,       // 7
}