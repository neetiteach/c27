class Chain{
    constructor(bodya,bodyb){
        var opt={
            bodyA:bodya,
            bodyB:bodyb,
            stiffness:0.08,
             length:8
        }
    
        this.body=Constraint.create(opt);
         World.add(world,this.body);         
    }

    display(){
        var posa=this.body.bodyA.position;
        var posb=this.body.bodyB.position;
        line(posa.x,posa.y,posb.x,posb.y);
    }
   }
