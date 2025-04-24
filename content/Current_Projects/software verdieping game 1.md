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
- [ ] rewrite code so that it [staticaly typed](https://docs.godotengine.org/en/4.4/tutorials/scripting/gdscript/static_typing.html)

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
	- [x] cooldown(with [timer](https://docs.godotengine.org/en/4.4/classes/class_timer.html))
	- [ ] hit count/detection display
	- [ ] score calculation(per bounce multiplier of 2 when hitting walls)
	- [x] bounce
	- [ ] destruction(wall/player/bullet)
	- [ ] walls

- [ ] **Enemy**
	- [ ] movement
		- [ ] navigation mesh
	- [ ] state machine
		- [ ] detection
	- [ ] health

- [ ] **Miscellaneous**
	- [x] configured official git plugin
	- [x] automatic build of game with GitHub action
	- [x] automatic create a release of the game
	- [x] configured new site so that I don't have to update class notebook
	- [ ] playtesting

Progress per week:
> [!Map]- Week 2:
>- player follows mouse
>![[../assets/mouse follow script.png]]
>- configured [git plugin](https://github.com/godotengine/godot-git-plugin) so I can commit from inside Godot.
>![[../assets/godot-git-plugin.png]]

> [!Map]- Week 3: 
> Sick: 
> Everytime I commit and push github actions automatically builds and creates a release.
> ![[../assets/godot CI.png]]
> ![[../assets/github release.png]]

> [!Map]- Week 4:
>- sick: but I'm begining to move my site to using [Quartz](https://github.com/jackyzha0/quartz)

> [!Map]- Week 5:
>- finished moving my site to new framework
>- implemented basic bounce to game
>![[../assets/bounce script.png]]
>- updated [Godot to version 4.4.1](https://godotengine.org/article/maintenance-release-godot-4-4-1)
>- updated [Script-IDE to version 1.7.0](https://github.com/Maran23/script-ide/releases/tag/1.7.0)

> [!Map]- Week 6:
> I got basic animation to work. 
> got the shooting timer to work, so that you cant shoot infinitely fast.

> [!Map]- Week 7:
> learning about Godot [Static Typing](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/static_typing.html) and will be rewriting code next week

> [!Map]- Week 8:
> Rewriting my code so that's its [Staticcaly Typed](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/static_typing.html)
> currently stuck, as I cant call a variable from a unsafe space anymore.

Difficulties:

that the origin is spinning with the mouse follow, problem was that could shoot myself in the face. so I had to lock the origin of the bullets to fix it.
