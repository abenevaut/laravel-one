<?php

declare(strict_types=1);

/**
 * This file is part of phpDocumentor.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @link http://phpdoc.org
 */

namespace phpDocumentor\Reflection\Php;

use phpDocumentor\Reflection\NodeVisitor\ElementNameResolver;
use PhpParser\Node;
use PhpParser\NodeTraverser;
use PhpParser\NodeTraverserInterface;
use PhpParser\NodeVisitor\NameResolver;
use PhpParser\Parser;
use PhpParser\ParserFactory;
use Webmozart\Assert\Assert;

/**
 * Factory to create a array of nodes from a provided file.
 *
 * This factory will use PhpParser and NodeTraverser to do the real processing.
 */
class NodesFactory
{
    /**
     * @param Parser $parser used to parse the code
     * @param NodeTraverserInterface $traverser used to do some post processing on the nodes
     */
    final public function __construct(private readonly Parser $parser, private readonly NodeTraverserInterface $traverser)
    {
    }

    /**
     * Creates a new instance of NodeFactory with default Parser ands Traverser.
     *
     * @param int $kind One of ParserFactory::PREFER_PHP7,
     *  ParserFactory::PREFER_PHP5, ParserFactory::ONLY_PHP7 or ParserFactory::ONLY_PHP5
     *
     * @return static
     */
    public static function createInstance(int $kind = 1): self
    {
        $parser = (new ParserFactory())->createForNewestSupportedVersion();
        $traverser = new NodeTraverser();
        $traverser->addVisitor(new NameResolver());
        $traverser->addVisitor(new ElementNameResolver());

        return new static($parser, $traverser);
    }

    /**
     * Will convert the provided code to nodes.
     *
     * @param string $code code to process.
     *
     * @return Node[]
     */
    public function create(string $code): array
    {
        $nodes = $this->parser->parse($code);
        Assert::isArray($nodes);

        return $this->traverser->traverse($nodes);
    }
}
