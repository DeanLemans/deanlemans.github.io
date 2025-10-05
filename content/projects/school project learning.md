---
tags:
  - finished
publish: true
---

# Reflection on Project

I made the scope way to big, and i should have build a whole godamn site, but it was fun to do. This is my final project for sintlucas, as i have realised for the final time that the things they teach us arnt useful to me. Add that to the promises they made, 2 month burnout of teachers, the *godamn drawing lessons*, and having a teacher that hasn't been teaching us for 2 whole periods (*that's 4 fucking months btw*). Unstuctured lessons and other such stuff. I have decided to drop out.  
[[School klachten]]

> [!Map]- General Plan
> - 3 kleine games maken in deze period waar ik verschillende onderwerpen mix.  
Of
> - 5 kleine projecten maken in deze period van elk onderwerp.  
Of
> - 1 groot project waar ik alle onderwerpen die ik wil leren in 1 doe.
> 
> > **Of** **mix** **van deze 3 dingen,** **ik kan mijn plan altijd nog aanpassen.  
**(audio doe ik erbij also er tijd voor is)

> [!Map]- Milestones
> 1. Player can shoot en kogels weerkaatsen van objecten. (physics engine)
> 2. Player movement.
> 3. Enemy detection. (state machine)
> 4. Enemy + Player health.
> 5. Player en geweer animatie.
> 6. Enemy animatie.

> [!imap]- PDF onderzoek  
> ![[software verdieping onderzoek.pdf]]

## Backlog

- [x] animation
- [ ] score
- [x] rewrite code so that it [staticaly typed](https://docs.godotengine.org/en/4.4/tutorials/scripting/gdscript/static_typing.html)
- [ ] **Player**
	- [x] look around/mouse follow
	- [x] player can move
	- [x] configure animation player
	- [ ] health
- [ ] **Shooting**  
	[on bullet shapes](<./on bullet shapes.md>)
	- [x] bullets
	- [x] cooldown(with [timer](https://docs.godotengine.org/en/4.4/classes/class_timer.html))
	- [ ] score calculation(per bounce multiplier of 2 when hitting walls)
	- [x] bounce
	- [ ] destruction(wall/player/bullet)
	- [x] walls
- [x] **Enemy**
	- [x] movement
		- [x] navigation mesh
	- [ ] state machine
		- [x] detection
	- [ ] health
- [ ] **Miscellaneous**
	- [x] configured official git plugin
	- [x] automatic build of game with GitHub action
	- [x] automatic create a release of the game
	- [x] configured new site so that I don't have to update class notebook
	- [ ] playtesting

Progress per week:

> [!Map]- Week 2:
> - player follows mouse  
> ![[mouse follow script.png]]
> - configured [git plugin](https://github.com/godotengine/godot-git-plugin) so I can commit from inside Godot.  
> ![[godot-git-plugin.png]]

> [!Map]- Week 3:  
> Sick:  
> Every time I commit and push github actions automatically builds and creates a release.  
> ![[godot CI.png]]  
> ![[github release.png]]

> [!Map]- Week 4:
> - sick: but I'm beginning to move my site to using [Quartz](https://github.com/jackyzha0/quartz)

> [!Map]- Week 5:
> - finished moving my site to new framework, and uploading this to my site.
> - implemented basic bounce to game  
> ![[bounce script.png]]
> - updated [Godot to version 4.4.1](https://godotengine.org/article/maintenance-release-godot-4-4-1)
> - updated [Script-IDE to version 1.7.0](https://github.com/Maran23/script-ide/releases/tag/1.7.0)

> [!Map]- Week 6:  
> I got basic animation to work.  
> got the shooting timer to work, so that you cant shoot infinitely fast.

> [!Map]- Week 7:  
> learning about Godot [Static Typing](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/static_typing.html) and will be rewriting code next week

> [!Map]- Week 8:  
> Rewriting my code so that's its [Staticcaly Typed](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/static_typing.html)  
> currently stuck, as I cant call a variable from a unsafe space anymore.

> [!Map]- Week 9:  
> I have begun creating a simple enemy, that wil chase me. this will work with a navigation mesh

> [!Map]- Week 10:  
> finished creating enemy, it doest have health as that wil take to long to implement.
> 
> Eneny will chase you when you are within its raycast, and will continue following you 5 seconds after you left its raycast

Difficulties:

that the origin is spinning with the mouse follow, problem was that could shoot myself in the face. so I had to lock the origin of the bullets to fix it.

interactions was difficult to work with

*What (collision) shape should my bullets be?*  
most games have their bullets rectangular bullets, but more cartoon like game have them in a circle.  
My bullets need to bounce of the wall, so I can make them a cube for more predictability or a circle for more chaos(as you cant really predict how they land)

==I will just test both and see which one is easier to work with.==
