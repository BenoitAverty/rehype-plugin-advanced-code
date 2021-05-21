```haskell [12,14,15]
module Hanoi where

type TowerIndex = Int
type Move = (TowerIndex,TowerIndex)
type DiskSize = Int
type Tower = [DiskSize]
type State = [Tower]

towerIndexes :: [TowerIndex]
towerIndexes = [0,1,2]

hanoi :: Int -> TowerIndex -> TowerIndex -> [Move]
hanoi 0 _ _ = []
hanoi n from to = hanoi (n-1) from spare ++ [(from, to)] ++ hanoi (n-1) spare to
  where spare = head $ filter (\t -> t /= from && t /= to) towerIndexes

```