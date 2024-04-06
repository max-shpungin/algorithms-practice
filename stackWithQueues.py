class MyStack:

    def __init__(self):
        self.qin = []


    def push(self, x: int) -> None:
        self.qin.append(x)


    def pop(self) -> int:
        self.qin.reverse()
        out = self.qin.pop(0)
        self.qin.reverse()
        return out

    def top(self) -> int:
        print(self.qin)
        out = self.qin.copy()
        out.reverse()
        return out[0]


    def empty(self) -> bool:
        return len(self.qin) == 0



# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()