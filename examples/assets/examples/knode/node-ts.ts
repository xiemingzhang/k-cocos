const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    moveNode: cc.Node = undefined;

    onLoad () {
        // 扩展节点
        cc.kNode(this.moveNode);
        
        // 指定节点状态切换回调函数
        this.moveNode.kStateCb = (newVal, oldVal) => {
            console.log(`状态改变: ${oldVal} -> ${newVal}`);
        }

        // 默认停止状态
        this.moveNode.kState = "stop";

        const sss = this.moveNode.kComponents
        console.log(sss)
    }

    // 按钮调用，使得节点运动
    move () {
        // this.moveNode.kState = "isMoving";
        // cc.tween(this.moveNode)
        //     .by(2, { x: 400 })
        //     .call(() => this.moveNode.kState = "stop")
        //     .start();
        // this.moveNode.getkNodeSpeed()
        // this.moveNode.getkAccelerate()
        // this.moveNode.setkNodeSpeed(cc.v2(400, 0))
        // this.moveNode.setkAccelerate(0, -5)
    }

    update() {
        if (this.moveNode.x < 0) {
            this.moveNode.setkAccelerate(10, 0)
        } else {
            this.moveNode.setkAccelerate(-10, 0)
        }
    }

}
