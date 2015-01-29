#!/usr/bin/python2

import ipdb
import jsparser
import sexp
import sys

from jsops import ops
from copy import copy
from string import whitespace
from pprint import pprint as prnt

jsfile = sys.argv[1]

atom_end = set("""()"\'""") | set(whitespace)

def sparse(sexp):
    """this function gotten from https://gist.github.com/240957
    """
    stack, i, length = [[]], 0, len(sexp)
    while i < length:
        c = sexp[i]
        reading = type(stack[-1])
        if reading == list:
            if   c == '(': stack.append([])
            elif c == ')':
                stack[-2].append(stack.pop())
                if stack[-1][0] == ('quote',): stack[-2].append(stack.pop())
            elif c == '"': stack.append('')
            elif c == "'": stack.append([('quote',)])
            elif c in whitespace: pass
            else: stack.append((c,))
        elif reading == str:
            if   c == '"':
                stack[-2].append(stack.pop())
                if stack[-1][0] == ('quote',): stack[-2].append(stack.pop())
            elif c == '\\':
                i += 1
                stack[-1] += sexp[i]
            else: stack[-1] += c
        elif reading == tuple:
            if c in atom_end:
                atom = stack.pop()
                try:
                    if atom[0][0].isdigit(): stack[-1].append(eval(atom[0]))
                    else: stack[-1].append(atom)
                except SyntaxError:
                    sys.stderr.write("""Failure {} SyntaxError in narc.sparse \n""".format(jsfile))
                    sys.exit(1)
                if stack[-1][0] == ('quote',): stack[-2].append(stack.pop())
                continue
            else: stack[-1] = ((stack[-1][0] + c),)
        i += 1
    return stack.pop()


def flatten(lst):
    for el in lst:
        if isinstance(el, list):
            for x in flatten(el):
                yield x
        else:
            yield el

def clean(lst):
    for el in lst:
        if isinstance(el, tuple) or isinstance(el,list):
            for x in el:
                yield x
        else:
            yield str(el)

def main():
    with open(jsfile) as js:
        sys.stdout.write("File: {}\n".format(jsfile))

        try:
            tree = flatten(
                    sparse(
                        sexp.convert(
                            jsparser.parse(
                                js.read()))))

            x = copy([i for i in clean(tree) if i in ops])
            y = str(x)
            z = {i:y.count(i) for i in sorted(set(x))}
            data = [z[i] for i in sorted(z)]
            sys.stdout.write("Success:{}\n".format(z))


        except jsparser.SyntaxError_:
            sys.stderr.write("Failure {}: SyntaxError_ thrown by jsparser \n".format(jsfile))
            sys.exit(1)

        sys.exit(0)

if __name__ == '__main__':
    main()
