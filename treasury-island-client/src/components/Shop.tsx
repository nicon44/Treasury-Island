import React, { useState } from 'react';

interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'shovel' | 'trap' | 'ability' | 'chest';
  size?: [number, number]; // For chests
}

interface ShopProps {
  playerGold: number;
  avatar: string;
  foundTreasures: string[]; // New prop to track found treasures
  currentTreasures: { [key: string]: number }; // New prop to track current treasures
  onPurchase: (item: Item, quantity: number) => void;
}

const shopInventory: Item[] = [
  { id: 'shovel', name: 'Shovel', price: 15, description: 'Used for digging', type: 'shovel' },
  { id: 'trap', name: 'Trap', price: 20, description: 'Deducts one shovel if activated', type: 'trap' },
  { id: 'chest1x1', name: 'Chest 1x1', price: 15, description: 'Small chest worth 20 gold', type: 'chest', size: [1, 1] },
  { id: 'chest2x1', name: 'Chest 2x1', price: 20, description: 'Medium chest worth 30 gold', type: 'chest', size: [2, 1] },
  { id: 'chest1x2', name: 'Chest 1x2', price: 25, description: 'Medium chest worth 35 gold', type: 'chest', size: [1, 2] },
  { id: 'chest1x3', name: 'Chest 1x3', price: 35, description: 'Large chest worth 50 gold', type: 'chest', size: [1, 3] },
];

export const Shop: React.FC<ShopProps> = ({ playerGold, avatar, foundTreasures, currentTreasures, onPurchase }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [quantity, setQuantity] = useState(1);

  const avatarAbility: Item = {
    id: 'ability',
    name: `${avatar} Ability`,
    price: 45,
    description: `Special ability for ${avatar}`,
    type: 'ability'
  };

  const allItems = [...shopInventory, avatarAbility];

  const handlePurchase = () => {
    if (selectedItem && playerGold >= selectedItem.price * quantity) {
      onPurchase(selectedItem, quantity);
      setSelectedItem(null);
      setQuantity(1);
    }
  };

  const canPurchaseChest = (item: Item) => {
    if (item.type !== 'chest') return true;
    const chestSize = `${item.size![0]}x${item.size![1]}`;
    return foundTreasures.includes(chestSize) && !currentTreasures[chestSize];
  };

  return (
    <div className="shop">
      <h2>Island Shop</h2>
      <p>Your Gold: {playerGold}</p>
      <div className="item-list">
        {allItems.map((item) => (
          <div
            key={item.id}
            className={`shop-item ${selectedItem?.id === item.id ? 'selected' : ''} ${!canPurchaseChest(item) ? 'disabled' : ''}`}
            onClick={() => canPurchaseChest(item) && setSelectedItem(item)}
          >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: {item.price} gold</p>
            {item.type === 'chest' && !canPurchaseChest(item) && (
              <p className="unavailable">Not available for purchase</p>
            )}
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="purchase-section">
          <h3>Selected: {selectedItem.name}</h3>
          <input
            type="number"
            min="1"
            max={selectedItem.type === 'chest' ? 1 : undefined}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          />
          <button
            onClick={handlePurchase}
            disabled={playerGold < selectedItem.price * quantity}
          >
            Purchase {quantity} for {selectedItem.price * quantity} gold
          </button>
        </div>
      )}
    </div>
  );
};