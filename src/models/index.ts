export type ItemID = number;

enum ItemType {
  Job = 'job',
  Story = 'story',
  Comment = 'comment',
  Poll = 'poll',
  Pollpot = 'pollopt'
}

export interface Item {
  id: ItemID;
  deleted?: boolean;
  type: ItemType;
  by: string;
  time: ItemID;
  text: string;
  dead?: boolean;
  parent: ItemID;
  poll: ItemID;
  kids: ItemID[];
  url: string;
  score: ItemID;
  title: string;
  parts: ItemID[];
  descendants: ItemID;
}
