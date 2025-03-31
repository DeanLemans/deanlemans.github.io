---
title: Software Verdieping Main
---
docenten: Angelo Lafaye and David Buzzi, jorrit
(shaders?)


> [!Map]- General Plan
> - 3 kleine games maken in deze periode waar ik verschillende onderwerpen mix.
Of
> - 5 kleine projecten maken in deze periode van elk onderwerp.
Of
> - 1 groot project waar ik alle onderwerpen die ik wil leren in 1 doe.
> > **Of** **mix** **van deze 3 dingen,** **ik kan mijn plan altijd nog aanpassen.
**(audio doe ik erbij als er tijd voor is)

> [!Map]- Milestones
>1. Player can shoot en kogels weerkaatsen van objecten. (physics engine)
>2. Player movement.
>3. Enemy detection. (state machine)
>4. Enemy + Player health.
>5. Player en geweer animatie.
>6. Enemy animatie.

>[!imap]- PDF onderzoek
>![[software verdieping onderzoek.pdf]]
>

## backlog
- [ ] animation
- [ ] audio
- [ ] multiplayer
- [ ] score

- [ ] **Player**
	- [x] look around/mouse follow
	- [x] player can move
	- [ ] animation tree
		- [ ] configure animation player
	- [ ] dash
	- [ ] health

- [ ] **Shooting**
	[[on bullet shapes]]
	- [x] bullets
	- [ ] hit count
	- [ ] score calculation(per bounce multiplier of 2 when hitting walls)
	- [x] bounce
	- [ ] destruction(wall/player/bullet)
	- [ ] walls

- [ ] **Enemy**
	- [ ] movement
	- [ ] state machine
	- [ ] detection
	- [ ] health

- [ ] **Miscellaneous**
	- [x] configured official git plugin
	- [x] automatic build of game with GitHub action
	- [x] automatic create a release of the game
	- [x] configured new site so that I don't have to update class notebook
	- [ ] playtesting


Difficulties:
