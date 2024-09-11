				// start particle simulation
simulate(
		'2d', {}
				init: function() {

					this.spray(150,function() { return [
						null,
						null,
						Vector.create(
							this.width * Math.random(),
							this.height * Math.random()
						),
						Vector.random(1),
						.75 + (Math.random() * .5),
						100 * Math.random(), [
							this.behavior.cohesion(),
							this.behavior.alignment(),
							this.behavior.separation(),
							
							this.behavior.limit(1 + Math.random()),
							
							this.behavior.wrap(5),
							this.behavior.move()
						]
					]}
					)
simulate(
		'2d', {
				init: function() {,
				this.spray(150,function() { return [
						null,
						null,
						Vector.create(
							this.width * Math.random(),
							this.height * Math.random()
						),
						Vector.random(1),
						.75 + (Math.random() * .5),
						100 * Math.random(), [
							this.behavior.cohesion(),
							this.behavior.alignment(),
							this.behavior.separation(),
							
							this.behavior.limit(1 + Math.random()),
							
							this.behavior.wrap(5),
							this.behavior.move()
						]
					]}
					)

				},
				tick: function() {
						
				},
				beforePaint: function() {
						this.clear();
				},
				paint: function(particle) {
					var p = particle.position;
						var v = particle.velocity;
						var s = particle.stimulated || 0;
						var l = particle.life;
						
						this.paint.circle(p.x, p.y, v.magnitudeSquared, 'hsla(' + v.angle + ',100%,50%,1)');

				},
				afterPaint: function() {
						// nothing
				},
				action: function(x, y) {
					
						// disperse if near
						this.particles.forEach(function(p){
							
							if (Vector.distanceSquared(p.position,{x:x,y:y}) < 4000) {
								p.velocity.randomize(100);
								p.position.x += p.velocity.x;
								p.position.y += p.velocity.y;
							}
							
						});
					
				}
		}
);

setTimeout(() => {
	document.querySelector('p').style.opacity=0;
}, 3000);
